import {Router} from "express";
import {auth} from '../middlewares/auth'
import walletController from "../controllers/walletController";

const walletRouter = Router();
walletRouter.use(auth)
walletRouter.get('/',walletController.getAll)
walletRouter.get('/one',walletController.getOne)
walletRouter.post('/',walletController.create)
walletRouter.put('/',walletController.update)
walletRouter.delete('/',walletController.remove)
export default walletRouter;

