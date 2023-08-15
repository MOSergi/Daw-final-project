export class ErrorThrower {
    constructor(code : number, message : string){
        this.throwError(code, message);
    }

    throwError(code : number, message : string){
        throw {
            statusCode : code,
            message : message
        }
    }
}