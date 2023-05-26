import {Router} from "express";

import TransactionController from "../controllers/transactionController";

const transactionRouter = Router();

transactionRouter.get('/', TransactionController.getOne)

export default transactionRouter;