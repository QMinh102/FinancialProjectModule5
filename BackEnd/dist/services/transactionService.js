"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const transaction_1 = require("../entity/transaction");
class TransactionService {
    constructor() {
        this.addTransactionService = async (transaction) => {
            let newTransaction = await this.transactionRepository.save(transaction);
            return newTransaction;
        };
        this.deleteTransactionService = async (id) => {
            await this.transactionRepository.delete({ id: id });
        };
        this.getOneTransactionService = async (id) => {
            let transaction = await this.transactionRepository.find({
                relations: {
                    category: true,
                    wallet: true,
                },
                where: {
                    id: id
                }
            });
            return transaction;
        };
        this.updateOneTransactionService = async (id, updateTransaction) => {
            await this.transactionRepository.update({ id: id }, updateTransaction);
        };
        this.transactionRepository = data_source_1.AppDataSource.getRepository(transaction_1.Transaction);
    }
}
exports.default = new TransactionService();
//# sourceMappingURL=transactionService.js.map