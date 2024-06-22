import express from "express";
import { userController } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/getAll", userController.user.getAllDetails);
userRouter.post("/add", userController.user.addDetails);
userRouter.post("/getOne", userController.user.getOneDetails);
userRouter.post("/delete", userController.user.deleteOne);

export { userRouter };
