import { Router } from "express";
import categoryRouter from "./categoryRouter";
import userRouter from "./userRouter";
import homeRouter from "./homeRouter";
const router = Router();

router.use("/category", categoryRouter);
router.use('/transaction', homeRouter)
router.use('/auth', userRouter);

export default router;
