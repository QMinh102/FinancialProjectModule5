"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transactionService_1 = __importDefault(require("../services/transactionService"));
class TransactionController {
    constructor() {
        this.getOne = async (req, res) => {
            let id = req.query.id;
            let transaction = await this.TransactionService.getOneTransactionService(id);
            res.status(200).json(transaction);
            res.end();
        };
        this.create = async (req, res) => {
            await this.TransactionService.addTransactionService(req.body);
            res.status(200).json({ message: "create transaction success !!" });
            res.end();
        };
        this.update = async (req, res) => {
            let id = req.query.id;
            await this.TransactionService.updateOneTransactionService(id, req.body);
            res.status(200).json({ message: "update transaction success !!" });
            res.end();
        };
        this.delete = async (req, res) => {
            let id = req.query.id;
            await this.TransactionService.deleteTransactionService(id);
            res.status(200).json({ message: "delete transaction success !!" });
            res.end();
        };
        this.TransactionService = transactionService_1.default;
    }
}
exports.default = new TransactionController();
//# sourceMappingURL=transactionController.js.map