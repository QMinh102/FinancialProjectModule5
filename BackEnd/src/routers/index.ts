import {Router} from "express";
import userRouter from "./userRouter";
import walletRouter from "./walletRouter"
import categoryRouter from "./categoryRouter";
import transactionRouter from "./transactionRouter";


const router = Router();

router.use("/user", userRouter);
router.use("/wallet", walletRouter);
router.use("/category", categoryRouter);
router.use("/transaction", transactionRouter);

export default router;
