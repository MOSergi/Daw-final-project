import { Register } from "./interfaces/Register"
import { User } from "./models/users.model";
import { ErrorThrower } from "../../utils/errorThrower";
import bcrypt from "bcryptjs" 

const create = async (params : Register)=>{

    const { email, name, password } = params;

    if (password.length < 8){
        new ErrorThrower(400, "password cannot be less than 8 characters");
    }

    const validEmail = await User.findAll({
        where : {
            email
        }
    });

    if (validEmail.length !== 0){
        new ErrorThrower(400, "email already exists");
    }

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const userCreated = await User.create({ name, email, password : encryptedPassword });

    delete userCreated.dataValues.id;
    delete userCreated.dataValues.password;

    return userCreated;

}

export const UsersService = {
    create
}