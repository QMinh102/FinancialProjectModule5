import { Request, Response } from "express";
declare class TransactionController {
    private transactionService;
    private walletService;
    constructor();
    getOneTransaction: (req: Request, res: Response) => Promise<void>;
    addTransaction: (req: Request, res: Response) => Promise<void>;
    updateOneTransaction: (req: Request, res: Response) => Promise<void>;
    deleteTransaction: (req: Request, res: Response) => Promise<void>;
    getTotalIncomeAndExpenseOfOneWallet: (req: Request, res: Response) => Promise<void>;
    getTotalIncomeAndExpense: (req: Request, res: Response) => Promise<void>;
    getTotalIncomeAndExpenseByMonth: (req: Request, res: Response) => Promise<void>;
    getTotalIncomeAndExpenseByEachWallet: (req: Request, res: Response) => Promise<void>;
    getTransactionBetweenTwoDates: (req: Request, res: Response) => Promise<void>;
    getTransactionByNote: (req: Request, res: Response) => Promise<void>;
    getTransactionByCategory: (req: Request, res: Response) => Promise<void>;
    getTransactionByWallet: (req: Request, res: Response) => Promise<void>;
}
declare const _default: TransactionController;
export default _default;
