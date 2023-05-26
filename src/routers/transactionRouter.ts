import transactionController from "../controllers/transactionController";
import {Router} from "express";


const transactionRouter = Router();

transactionRouter.get('/:id', transactionController.getOneTransaction)
transactionRouter.post('/', transactionController.addTransaction)
transactionRouter.put('/:id',transactionController.updateOneTransaction)
transactionRouter.delete('/:id', transactionController.deleteTransaction)

export default transactionRouter;