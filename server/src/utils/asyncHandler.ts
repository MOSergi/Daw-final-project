import { NextFunction, Request, Response } from "express"

export const asyncHandler = (funcion : CallableFunction )=>{
    return (req : Request, res : Response, next: NextFunction)=>{
        return Promise.resolve(funcion(req, res)).catch(next); 
    }
}