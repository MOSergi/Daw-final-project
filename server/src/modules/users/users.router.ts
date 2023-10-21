import { Router } from "express";
import { UsersController } from "./users.controller";
import { asyncHandler } from "../../utils/asyncHandler";

const usersRouter = Router();

usersRouter.post("/", asyncHandler(UsersController.createUser));

export default usersRouter;