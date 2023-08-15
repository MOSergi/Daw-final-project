import { Register } from "./interfaces/Register"
import { User } from "./models/users.model";
import { ErrorThrower } from "../../utils/errorThrower";
import bcrypt from "bcryptjs" 

const register = async (params : Register)=>{

    const { email, name, password } = params;

    //check email validation 

    const validEmail = await User.findAll({
        where : {
            email
        }
    });

    if (validEmail.length !== 0){
        new ErrorThrower(401, "email already exists");
    }

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const userCreated = await User.create({ name, email, password : encryptedPassword });

    return userCreated;

}

export const UsersService = {
    register
}