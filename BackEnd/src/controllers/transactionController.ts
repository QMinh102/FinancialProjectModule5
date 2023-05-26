import { Request, Response } from "express";
import TransactionService from "../services/transactionService";

class TransactionController {
    private TransactionService;

    constructor() {
        this.TransactionService = TransactionService;
    }

    getOne = async (req: Request, res: Response) => {
        let id = req.query.id
        let transaction = await transactionService.getOneTransactionService(id)
        res.status(200).json(transaction)
        res.end();
    }

    create = async (req: Request, res: Response) => {
        await transactionService.addTransactionService(req.body)
        res.status(200).json({message: "create transaction success !!"})
        res.end();
    }

    update = async (req: Request, res: Response) => {
        let id = req.query.id
        await transactionService.updateOneTransactionService(id, req.body);
        res.status(200).json({message: "update transaction success !!"})
        res.end();
    }

    delete = async (req: Request, res: Response) => {
        let id = req. query.id
        await transactionService.deleteTransactionService(id);
        res.status(200).json({message: "delete transaction success !!"})
        res.end();
    }
}

export default new TransactionController()