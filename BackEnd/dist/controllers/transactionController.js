"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transactionService_1 = __importDefault(require("../services/transactionService"));
const walletService_1 = __importDefault(require("../services/walletService"));
const categoryService_1 = __importDefault(require("../services/categoryService"));
const walletController_1 = require("./walletController");
class TransactionController {
    constructor() {
        this.getAllTransaction = async (req, res) => {
            let idWallet = req.params.id;
            let transactions = await transactionService_1.default.getAllTransactionService(idWallet);
            res.status(200).json(transactions);
        };
        this.getOneTransaction = async (req, res) => {
            let id = req.params.id;
            let transaction = await transactionService_1.default.getOneTransactionService(id);
            res.status(200).json(transaction);
        };
        this.addTransaction = async (req, res) => {
            let userId = (0, walletController_1.getToken)(req, res);
            let walletId = req.params.id;
            let transaction = req.body;
            transaction.wallet = walletId;
            let totalExpense = +await this.transactionService.getTotalExpense(walletId, userId);
            let wallet = await this.walletService.getOne(walletId);
            let category = await this.categoryService.getOne(transaction.category);
            let total = wallet.total;
            let newTotal;
            if (category.transactionType == 'expense') {
                let newTotalExpense = totalExpense + transaction.amount;
                if (newTotalExpense > total) {
                    res.status(200).json({ message: "You can not go over your wallet limit" });
                }
                else {
                    await transactionService_1.default.addTransactionService(transaction);
                    newTotal = total - transaction.amount;
                    await this.walletService.update({ id: walletId }, { total: newTotal });
                    res.status(200).json({ message: "create transaction success!!" });
                }
            }
            else {
                await transactionService_1.default.addTransactionService(transaction);
                newTotal = total + transaction.amount;
                await this.walletService.update({ id: walletId }, { total: newTotal });
                res.status(200).json({ message: "Create transaction success!!" });
            }
        };
        this.updateOneTransaction = async (req, res) => {
            let transactionId = req.params.id;
            let userId = (0, walletController_1.getToken)(req, res);
            let updateTransaction = req.body;
            let oldTransaction = await this.transactionService.getOneTransactionService(transactionId);
            let walletId = updateTransaction.wallet;
            let totalExpense = await this.transactionService.getTotalExpense(walletId, userId);
            let categoryId = updateTransaction.categoryId;
            let category = await this.categoryService.getOne(categoryId);
            let wallet = await this.walletService.getOne(walletId);
            let total = wallet.total;
            let newTotal;
            if (category.transactionType == 'expense') {
                let newTotalExpense = totalExpense - oldTransaction.amount + updateTransaction.amount;
                if (newTotalExpense > total) {
                    res.status(200).json({ message: "You can not go over your wallet limit" });
                }
                else {
                    await this.transactionService.updateOneTransactionService(transactionId, updateTransaction);
                    newTotal = wallet.total - oldTransaction.amount + updateTransaction.amount;
                    await this.walletService.update({ id: walletId }, { total: newTotal });
                    res.status(200).json({ message: "Update transaction success !!" });
                }
            }
            else {
                await this.transactionService.updateOneTransactionService(transactionId, updateTransaction);
                newTotal = wallet.total - oldTransaction.amount + updateTransaction.amount;
                await this.walletService.update({ id: walletId }, { total: newTotal });
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
            let userId = await (0, walletController_1.getToken)(req, res);
            let totalIncomeAndExpense = await this.transactionService.getTotalIncomeAndExpenseService(userId);
            res.status(200).json(totalIncomeAndExpense);
        };
        this.getTotalIncomeAndExpenseByMonth = async (req, res) => {
            let year = req.query.year;
            let userId = await (0, walletController_1.getToken)(req, res);
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
            let userId = await (0, walletController_1.getToken)(req, res);
            let totalIncomeAndExpenseByWallet = await this.transactionService.getTotalIncomeAndExpenseByEachWalletService(userId);
            res.status(200).json(totalIncomeAndExpenseByWallet);
        };
        this.getTransactionBetweenTwoDates = async (req, res) => {
            let userId = await (0, walletController_1.getToken)(req, res);
            let startDate = req.query.startDate;
            let endDate = req.query.endDate;
            let transactionsBetweenTwoDates = await this.transactionService.getTransactionBetweenTwoDatesService(userId, startDate, endDate);
            res.status(200).json(transactionsBetweenTwoDates);
        };
        this.getTransactionByNote = async (req, res) => {
            let userId = await (0, walletController_1.getToken)(req, res);
            let note = req.query.note;
            let transactionsByNote = await this.transactionService.getTransactionByNoteService(userId, note);
            res.status(200).json(transactionsByNote);
        };
        this.getTransactionByCategory = async (req, res) => {
            let userId = await (0, walletController_1.getToken)(req, res);
            let categoryId = req.params.id;
            let transactions = await this.transactionService.getTransactionByCategoryService(userId, categoryId);
            res.status(200).json(transactions);
        };
        this.getTransactionByWallet = async (req, res) => {
            let userId = await (0, walletController_1.getToken)(req, res);
            let walletId = req.params.id;
            let transactions = await this.transactionService.getTransactionByWalletService(userId, walletId);
            res.status(200).json(transactions);
        };
        this.transactionService = transactionService_1.default;
        this.walletService = walletService_1.default;
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new TransactionController();
//# sourceMappingURL=transactionController.js.map