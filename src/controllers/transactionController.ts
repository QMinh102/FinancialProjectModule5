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


    // Tổng thu và chi của từng ví
    getTotalIncomeAndExpenseOfOneWallet = async (req:Request,res:Response)=>{
        let id = req.params.id;
        let totalIncomeAndExpenseOfOneWallet = await this.transactionService. getTotalIncomeAndExpenseOfOneWalletService(id);
        res.status(200).json(totalIncomeAndExpenseOfOneWallet);
    }

    //Tổng thu và chi total
    getTotalIncomeAndExpense = async (req:Request,res:Response)=>{
        let userId = req['decode'].userId
        let totalIncomeAndExpenseOfOneWallet = await this.transactionService.getTotalIncomeAndExpenseService(userId);
        res.status(200).json(totalIncomeAndExpenseOfOneWallet);
    }

    //Tổng thu và chi theo từng tháng của năm
    getTotalIncomeAndExpenseByMonth = async (req:Request,res:Response)=>{
        let year = req.query.year
        let userId = req['decode'].userId
        let totalIncomeAndExpenseByMonth = await this.transactionService.getTotalIncomeAndExpenseByMonthService(year, userId)
        res.status(200).json(totalIncomeAndExpenseByMonth);
    }

    // Tổng thu và chi theo từng ví

    getTotalIncomeAndExpenseByEachWallet = async (req:Request,res:Response)=>{
        let userId = req['decode'].userId
        let totalIncomeAndExpenseByWallet = await this.transactionService.getTotalIncomeAndExpenseByEachWalletService(userId)
        res.status(200).json(totalIncomeAndExpenseByWallet);
    }





}
export default new TransactionController()