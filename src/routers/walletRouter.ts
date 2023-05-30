import {Router} from "express";
import walletController from "../controllers/walletController";
import transactionController from "../controllers/transactionController";
import {auth} from "../middlewares/auth";

const walletRouter = Router();
// walletRouter.use(auth)

walletRouter.delete('/:id',walletController.remove);
walletRouter.put('/:id',walletController.update);
walletRouter.get('/income-expenditure-comparison/:id', transactionController.getTotalIncomeAndExpenseOfOneWallet);
walletRouter.get('/all/:id', transactionController.getAllTransaction);
walletRouter.get('/transactions/:id', transactionController.getOneTransaction)
walletRouter.put('/transactions/:id',transactionController.updateOneTransaction)
walletRouter.post('/transactions/:id', transactionController.addTransaction)
walletRouter.delete('/transactions/:id', transactionController.deleteTransaction)
export default walletRouter;

