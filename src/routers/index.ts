import { Router } from "express";
import categoryRouter from "./categoryRouter";
import transactionRouter from "./transactionRouter";
import userRouter from "./userRouter";
const router = Router();
router.use("/category", categoryRouter);
router.use('/transaction', transactionRouter)
router.use('/auth', userRouter);
export default router;
