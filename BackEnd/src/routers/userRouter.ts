import {Router} from "express";
import {auth} from "../middlewares/auth";
import UserController from "../controllers/userController";


const userRouter = Router();
userRouter.use(auth)
userRouter.get('/', UserController.login)


export default userRouter;
