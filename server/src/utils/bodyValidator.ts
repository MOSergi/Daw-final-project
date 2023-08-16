import { Request } from "express";
import { ErrorThrower } from "./errorThrower";

export const bodyValidator = (req : Request, params : { requiredValues : string[] })=>{

    if (Object.keys(req.body).length === 0){
        new ErrorThrower(400, `Body values are required`);
    }

    const requiredValues = params.requiredValues;

    const notProvidedValues : string[] = [];

    const bodyValues = [] as any;

    for (const value of requiredValues) {
        if (req.body[value] === undefined || req.body[value] === null){
            notProvidedValues.push(value);
        } else {
            bodyValues.push(req.body[value]);
        }
    }

    if (notProvidedValues.length !== 0){
        new ErrorThrower(400, `${notProvidedValues.join(",")} are required`);
    }

    return bodyValues;

} 