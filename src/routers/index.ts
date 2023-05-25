import { Router } from "express";
import categoryRouter from "./categoryRouter";
const router = Router();
router.use("/category", categoryRouter);
router.use("/auth");
export default router;
