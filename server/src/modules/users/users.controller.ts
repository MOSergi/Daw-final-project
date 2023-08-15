import { Request, Response } from "express"
import { UsersService } from "./users.service";

const register = async (req : Request, res : Response)=>{
    
    //pending check if body values are null or undefined
    const body = req.body;

    const userCreated = await UsersService.register({
        email : body.email,
        name : body.name,
        password : body.password
    });

    res.status(200).json({
        message : `User created succesffully`,
        userCreated
    });

}

export const UsersController = {
    register
}