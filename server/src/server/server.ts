import express, { Application, NextFunction, Request, Response } from "express";
import appRouter from "../router/router";
import cors from "cors";
import sequelize from "../database/db";

export class Server {

    private app : Application = express();
    private cors = cors;

    async startApp(){
        await this.dbConnection();
        this.middleware();
        this.routes();
        this.app.use(this.errorHandler);
    }

    private async dbConnection(){
        try {
            await sequelize.authenticate();
            console.log("Connected");

        } catch (e : any){
            console.log(e);
            console.log("Connection refussed");
        }
    }

    private middleware(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    private errorHandler(err : any, _req : Request, res : Response, next : NextFunction){

        if (res.headersSent) {
            return next(err)
        }

        if (err){
            if (err.statusCode !== null && err.statusCode !== undefined){
                res.status(err.statusCode).json({
                    statusCode : err.statusCode,
                    message : err.message
                })
            } else {
                if (err.name === "SequelizeValidationError"){
                    res.status(400).json({
                        statusCode : 400,
                        error : err.errors[0].message
                    })
                } else {
                    res.status(500).json({
                        statusCode : 500,
                        message : "Unnexpected error",
                    })
                }
            }
        }
    }

    private routes(){
        this.app.use("/api/v1/", appRouter);
    }

    listen(port : number){
        this.app.listen(port);
    }    

}