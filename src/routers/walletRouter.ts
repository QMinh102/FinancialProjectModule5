import {Router} from "express";
import walletController from "../controllers/walletController";
import transactionController from "../controllers/transactionController";
import {auth} from "../middlewares/auth";

const walletRouter = Router();
// walletRouter.use(auth)

walletRouter.delete('/:id',walletController.remove);
walletRouter.put('/:id',walletController.update);
walletRouter.get('/income-expenditure-comparison/:id', transactionController.getTotalIncomeAndExpenseOfOneWallet);
walletRouter.get('/transactions/:id', transactionController.getAllTransaction);
walletRouter.get('/transactions/transaction/:id', transactionController.getOneTransaction)
walletRouter.put('/transaction/:id',transactionController.updateOneTransaction)
walletRouter.post('/transaction/:id', transactionController.addTransaction)
walletRouter.delete('/transaction', transactionController.deleteTransaction)
export default walletRouter;

