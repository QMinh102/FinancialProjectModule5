import { Router } from "express";
import categoryRouter from "./categoryRouter";
import transactionRouter from "./transactionRouter";
const router = Router();
router.use("/category", categoryRouter);
router.use('/transaction', transactionRouter)
// router.use("/auth");
export default router;
