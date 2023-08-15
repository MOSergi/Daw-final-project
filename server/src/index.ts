import * as dotenv from "dotenv";
dotenv.config();
import { Server } from "./server/server";

const server = new Server();
server.startApp();
server.listen(8080);