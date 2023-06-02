import { Router } from "express";
import categoryRouter from "./categoryRouter";
import userRouter from "./userRouter";
import walletRouter from "./walletRouter";
import homeRouter from "./homeRouter";
import TransactionRouter from "./transactionRouter";
const router = Router();
router.use("/category", categoryRouter);
router.use('/wallet', walletRouter);
router.use('/home', homeRouter)
router.use('/transaction', TransactionRouter)
router.use('/auth', userRouter);
export default router;
