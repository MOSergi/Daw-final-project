import { Router } from "express";
import { UsersController } from "./users.controller";
import { asyncHandler } from "../../utils/asynHandler";

const usersRouter = Router();

usersRouter.post("/", asyncHandler(UsersController.createUser));

export default usersRouter;