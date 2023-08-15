import sequelize from "../../../database/db";
import { DataTypes } from "sequelize";

export const User = sequelize.define('User', {
    id: {
        type : DataTypes.DOUBLE,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING,
        validate : {
            isEmail : true
        }
    },
    password : {
        type : DataTypes.STRING,
        validate : {
            min : 8
        }
    }
}); 

User.sync({
    alter : true
})
