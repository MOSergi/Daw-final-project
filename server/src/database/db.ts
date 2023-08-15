import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    {
        dialect : "mysql",
        database : process.env.MYSQL_DATABASE,
        host : "localhost",
        port : Number(process.env.DB_PORT),
        username : process.env.MYSQL_USER,
        password : process.env.MYSQL_ROOT_PASSWORD,
        logging : false
    }
);

export default sequelize;