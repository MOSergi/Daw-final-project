import { Request, Response } from "express"
import { UsersService } from "./users.service";
import { bodyValidator } from "../../utils/bodyValidator";

const createUser = async (req : Request, res : Response)=>{

    const [name, email, password] = bodyValidator(req, { requiredValues : ["name", "email", "password"] });

    const userCreated = await UsersService.create({
        email,
        name,
        password
    });

    res.status(200).json({
        message : `User created succesffully`,
        userCreated
    });

}

export const UsersController = {
    createUser
}