import transactionController from "../controllers/transactionController";
import {Router} from "express";


const transactionRouter = Router();

transactionRouter.get('/:id', transactionController.getOneTransaction)
transactionRouter.post('/', transactionController.addTransaction)
transactionRouter.put('/:id',transactionController.updateOneTransaction)
transactionRouter.delete('/:id', transactionController.deleteTransaction)
transactionRouter.get('/income-expenditure-comparison/wallet/:id', transactionController.getTotalIncomeAndExpenseOfOneWallet)
transactionRouter.get('/income-expenditure-comparison/total', transactionController.getTotalIncomeAndExpense);
transactionRouter.get('/income-expenditure-comparison/by-year', transactionController.getTotalIncomeAndExpenseByMonth);
transactionRouter.get('/income-expenditure-comparison/by-wallet', transactionController.getTotalIncomeAndExpenseByEachWallet);



export default transactionRouter;