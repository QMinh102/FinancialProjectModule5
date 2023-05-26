import { Request,Response } from "express";
import transactionService from "../services/transactionService";
class TransactionController {
    private transactionService;
    constructor(){
        this.transactionService = transactionService;
    }

    getOneTransaction= async (req:Request,res:Response)=>{
        let id = req.params.id
        let transaction = await transactionService.getOneTransactionService(id)
        res.status(200).json(transaction)
    }
    addTransaction = async (req:Request,res:Response)=>{
        let transaction =  req.body
        await transactionService.addTransactionService(transaction)
        res.status(200).json({message: "create transaction success !!"})
    }
    updateOneTransaction = async (req:Request,res:Response)=>{
        let idTrans = req.params.id
        let updateTransaction = req.body
        await this.transactionService.updateOneTransactionService(idTrans, updateTransaction)
        res.status(200).json({message: "update transaction success !!"})
    }
    deleteTransaction = async (req:Request,res:Response)=>{
        let id = req.params.id
        await this.transactionService.deleteTransactionService(id)
        res.status(200).json({message: "delete transaction success !!"})
    }
}
export default new TransactionController()