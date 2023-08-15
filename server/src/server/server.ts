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
        this.app.use((err : any, req : Request, res : Response, next : NextFunction)=>{
            if (err){
                //validate this
                if (err.code !== null && err.code !== undefined){
                    res.status(err.code).json({
                        statusCode : err.code,
                        message : err.message
                    })
                } else {
                    res.status(500).json({
                        err
                    })
                }
            }
        });
    }

    private async dbConnection(){
        try {
            await sequelize.authenticate();
            console.log("Connected");

        } catch (e : any){
            console.log(e);
            console.log("Conenction refussed");
        }
    }

    private middleware(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    private routes(){
        this.app.use("/api/v1/", appRouter);
    }

    listen(port : number){
        this.app.listen(port);
    }    

}