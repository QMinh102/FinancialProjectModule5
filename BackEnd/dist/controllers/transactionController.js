"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transactionService_1 = __importDefault(require("../services/transactionService"));
const walletService_1 = __importDefault(require("../services/walletService"));
class TransactionController {
    constructor() {
        this.getOneTransaction = async (req, res) => {
            let id = req.params.id;
            let transaction = await transactionService_1.default.getOneTransactionService(id);
            res.status(200).json(transaction);
        };
        this.addTransaction = async (req, res) => {
            let userId = req['decode'].userId;
            let walletId = req.params.id;
            let transaction = req.body;
            let totalExpense = +await this.transactionService.getTotalExpense(walletId, userId);
            let total = await this.walletService.getTotalOfWallet(walletId);
            let newTotalExpense = totalExpense + transaction.amount;
            if (newTotalExpense > total) {
                res.status(200).json({ message: "You can not go over your wallet limit" });
            }
            else {
                await transactionService_1.default.addTransactionService(transaction);
                res.status(200).json({ message: "create transaction success!!" });
            }
        };
        this.updateOneTransaction = async (req, res) => {
            let idTrans = req.params.id;
            let userId = req['decode'].userId;
            let updateTransaction = req.body;
            let transaction = await this.transactionService.getOneTransactionService(idTrans);
            let walletId = transaction.wallet.id;
            let totalExpense = +await this.transactionService.getTotalExpense(walletId, userId);
            let total = await this.walletService.getTotalOfWallet(walletId);
            let newTotalExpense = totalExpense + transaction.amount;
            if (newTotalExpense > total) {
                res.status(200).json({ message: "You can not go over your wallet limit" });
            }
            else {
                await this.transactionService.updateOneTransactionService(idTrans, updateTransaction);
                res.status(200).json({ message: "update transaction success !!" });
            }
        };
        this.deleteTransaction = async (req, res) => {
            let id = req.params.id;
            await this.transactionService.deleteTransactionService(id);
            res.status(200).json({ message: "delete transaction success !!" });
        };
        this.getTotalIncomeAndExpenseOfOneWallet = async (req, res) => {
            let id = req.params.id;
            let totalIncomeAndExpenseOfOneWallet = await this.transactionService.getTotalIncomeAndExpenseOfOneWalletService(id);
            res.status(200).json(totalIncomeAndExpenseOfOneWallet);
        };
        this.getTotalIncomeAndExpense = async (req, res) => {
            let userId = req['decode'].userId;
            let totalIncomeAndExpense = await this.transactionService.getTotalIncomeAndExpenseService(userId);
            res.status(200).json(totalIncomeAndExpense);
        };
        this.getTotalIncomeAndExpenseByMonth = async (req, res) => {
            let year = req.query.year;
            let userId = req['decode'].userId;
            let newData = [];
            await this.transactionService.getTotalIncomeAndExpenseByMonthService(year, userId).then((data) => {
                for (let i = 1; i < 13; i++) {
                    let found = false;
                    for (let j = 0; j < data.length; j++) {
                        let month = +data[j].month_year.substring(0, 2);
                        if (month === i) {
                            newData.push({
                                "month": i,
                                "totalIncome": data[j].totalIncome,
                                "totalExpense": data[j].totalExpense
                            });
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        newData.push({
                            "month": i,
                            "totalIncome": 0,
                            "totalExpense": 0
                        });
                    }
                }
            });
            res.status(200).json(newData);
        };
        this.getTotalIncomeAndExpenseByEachWallet = async (req, res) => {
            console.log(4);
            let userId = req['decode'].userId;
            let totalIncomeAndExpenseByWallet = await this.transactionService.getTotalIncomeAndExpenseByEachWalletService(userId);
            res.status(200).json(totalIncomeAndExpenseByWallet);
        };
        this.getTransactionBetweenTwoDates = async (req, res) => {
            let userId = req['decode'].userId;
            let startDate = req.query.startDate;
            let endDate = req.query.endDate;
            let transactionsBetweenTwoDates = await this.transactionService.getTransactionBetweenTwoDatesService(userId, startDate, endDate);
            res.status(200).json(transactionsBetweenTwoDates);
        };
        this.getTransactionByNote = async (req, res) => {
            let userId = req['decode'].userId;
            let note = req.query.note;
            let transactionsByNote = await this.transactionService.getTransactionByNoteService(userId, note);
            res.status(200).json(transactionsByNote);
        };
        this.getTransactionByCategory = async (req, res) => {
            let userId = req['decode'].userId;
            let categoryId = req.params.id;
            let transactions = await this.transactionService.getTransactionByCategoryService(userId, categoryId);
            res.status(200).json(transactions);
        };
        this.getTransactionByWallet = async (req, res) => {
            let userId = req['decode'].userId;
            let walletId = req.params.id;
            let transactions = await this.transactionService.getTransactionByWalletService(userId, walletId);
            res.status(200).json(transactions);
        };
        this.transactionService = transactionService_1.default;
        this.walletService = walletService_1.default;
    }
}
exports.default = new TransactionController();
//# sourceMappingURL=transactionController.js.map