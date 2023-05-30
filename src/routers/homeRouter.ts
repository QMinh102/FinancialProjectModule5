import {Router} from "express";
const homeRouter = Router();
import transactionController from "../controllers/transactionController";
import {auth} from "../middlewares/auth";
import walletController from "../controllers/walletController";
import walletRouter from "./walletRouter";

// homeRouter.use(auth)
homeRouter.get('/wallets',walletController.getAll)
homeRouter.get('/income-expenditure-comparison/total', transactionController.getTotalIncomeAndExpense);
homeRouter.get('/income-expenditure-comparison/monthly', transactionController.getTotalIncomeAndExpenseByMonth);
homeRouter.get('/income-expenditure-comparison/by-wallet', transactionController.getTotalIncomeAndExpenseByEachWallet);
homeRouter.post('/',walletController.create)





export default homeRouter;
