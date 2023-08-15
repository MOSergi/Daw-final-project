import { Router } from "express";
import authRouter from "../modules/auth/auth.router";
import usersRouter from "../modules/users/users.router";

const appRouter = Router();

appRouter.use("/users", usersRouter);
appRouter.use("/auth", authRouter);

export default appRouter;