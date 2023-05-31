"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transactionController_1 = __importDefault(require("../controllers/transactionController"));
const express_1 = require("express");
const transactionRouter = (0, express_1.Router)();
transactionRouter.get('/:id', transactionController_1.default.getOneTransaction);
transactionRouter.post('/add/:id', transactionController_1.default.addTransaction);
transactionRouter.put('/:id', transactionController_1.default.updateOneTransaction);
transactionRouter.delete('/:id', transactionController_1.default.deleteTransaction);
transactionRouter.get('/income-expenditure-comparison/wallet/:id', transactionController_1.default.getTotalIncomeAndExpenseOfOneWallet);
transactionRouter.get('/income-expenditure-comparison/total', transactionController_1.default.getTotalIncomeAndExpense);
transactionRouter.get('/income-expenditure-comparison/by-year', transactionController_1.default.getTotalIncomeAndExpenseByMonth);
transactionRouter.get('/income-expenditure-comparison/by-wallet', transactionController_1.default.getTotalIncomeAndExpenseByEachWallet);
exports.default = transactionRouter;
//# sourceMappingURL=transactionRouter.js.map