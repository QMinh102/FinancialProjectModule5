import { Request, Response } from "express";
import TransactionService from "../services/transactionService";

class TransactionController {
    private TransactionService;

    constructor() {
        this.TransactionService = TransactionService;
    }

    getOne = async (req: Request, res: Response) => {
        let id = req.query.id
        let transaction = await this.TransactionService.getOneTransactionService(id)
        res.status(200).json(transaction)
        res.end();
    }

    create = async (req: Request, res: Response) => {
        await this.TransactionService.addTransactionService(req.body)
        res.status(200).json({message: "create transaction success !!"})
        res.end();
    }

    update = async (req: Request, res: Response) => {
        let id = req.query.id
        await this.TransactionService.updateOneTransactionService(id, req.body);
        res.status(200).json({message: "update transaction success !!"})
        res.end();
    }

    delete = async (req: Request, res: Response) => {
        let id = req. query.id
        await this.TransactionService.deleteTransactionService(id);
        res.status(200).json({message: "delete transaction success !!"})
        res.end();
    }
}

export default new TransactionController()