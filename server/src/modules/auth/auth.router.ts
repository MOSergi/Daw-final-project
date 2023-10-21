import { Router } from "express";
import { AuthController } from "./auth.controller";
import { asyncHandler } from "../../utils/asyncHandler";

const authRouter = Router();

authRouter.get("/login", asyncHandler(AuthController.login));

export default authRouter;