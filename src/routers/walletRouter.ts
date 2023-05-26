import {Router} from "express";
import walletController from "../controllers/walletController";

const walletRouter = Router();

walletRouter.get('/',walletController.getAll)
walletRouter.get('/one',walletController.getOne)
walletRouter.post('/',walletController.create)
walletRouter.put('/',walletController.update)
walletRouter.delete('/',walletController.remove)

