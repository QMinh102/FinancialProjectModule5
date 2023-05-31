import { Router } from "express";
import categoryRouter from "./categoryRouter";
import transactionRouter from "./transactionRouter";
import userRouter from "./userRouter";
import walletRouter from "./walletRouter";
const router = Router();

router.use("/category", categoryRouter);
router.use('/transaction', transactionRouter)
router.use('/wallet', walletRouter);
router.use('/auth', userRouter);

export default router;
