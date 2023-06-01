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
        this.getAllTransactionService = async (idWallet) => {
            let transactions = await this.transactionRepository.find({
                where: {
                    idWallet: idWallet
                }
            });
            return transactions;
        };
        this.updateOneTransactionService = async (id, updateTransaction) => {
            await this.transactionRepository.update({ id: id }, updateTransaction);
        };
        this.getTotalIncomeAndExpenseOfOneWalletService = async (id) => {
            let sql = `select sum(case when category.transactionType = 'income' then transaction.amount else 0 end ) as totalIncome, sum(case when category.transactionType = 'expense' then transaction.amount else 0 end) as totalExpense from transaction inner join wallet on transaction.walletId = wallet.id inner join category on transaction.categoryId = category.id where wallet.id = ${id}`;
            let totalIncomeAndExpenseOfOneWallet = await this.transactionRepository.query(sql);
            return totalIncomeAndExpenseOfOneWallet[0];
        };
        this.getTotalIncomeAndExpenseService = async (userId) => {
            let sql = `select sum(case when category.transactionType = 'income' then transaction.amount else 0 end ) as totalIncome, sum(case when category.transactionType = 'expense' then transaction.amount else 0 end) as totalExpense from transaction inner join wallet on transaction.walletId = wallet.id inner join category on transaction.categoryId = category.id where wallet.userId = ${userId}`;
            let totalIncomeAndExpense = await this.transactionRepository.query(sql);
            return totalIncomeAndExpense[0];
        };
        this.getTotalIncomeAndExpenseByMonthService = async (year, userId) => {
            let sql = `select date_format(transaction.date, '%m%Y') as month_year, sum(case when category.transactionType = 'income' then transaction.amount else 0 end) as totalIncome, sum(case when category.transactionType = 'expense' then transaction.amount else 0 end) as totalExpense from transaction inner join wallet on transaction.walletId = wallet.id inner join category on transaction.categoryId = category.id where YEAR(transaction.date) = ${year} and wallet.userId = ${userId} group by month_year order by month_year`;
            let totalIncomeAndExpenseByMonth = await this.transactionRepository.query(sql);
            return totalIncomeAndExpenseByMonth;
        };
        this.getTotalIncomeAndExpenseByEachWalletService = async (userId) => {
            let sql = `select wallet.name, sum(case when category.transactionType = 'income' then transaction.amount else 0 end) as income, sum(case when category.transactionType = 'expense' then transaction.amount else 0 end) as expense from transaction inner join wallet on transaction.walletId = wallet.id inner join category on transaction.categoryId = category.id where wallet.userId = ${userId} group by wallet.id`;
            let totalIncomeAndExpenseByEachWallet = await this.transactionRepository.query(sql);
            return totalIncomeAndExpenseByEachWallet;
        };
        this.getTransactionBetweenTwoDatesService = async (userId, startDate, endDate) => {
            let sql = `SELECT * FROM transaction INNER JOIN category ON transaction.categoryId = category.id INNER JOIN wallet ON transaction.walletId = wallet.id WHERE (transaction.date BETWEEN ${startDate} AND ${endDate}) AND wallet.userId = ${userId}`;
            let transactions = await this.transactionRepository.query(sql);
            return transactions;
        };
        this.getTransactionByNoteService = async (userId, note) => {
            let sql = "SELECT * FROM transaction INNER JOIN category ON transaction.categoryId = category.id INNER JOIN wallet ON transaction.walletId = wallet.id WHERE transaction.note LIKE ? AND wallet.userId = ?";
            let transactions = await this.transactionRepository.query(sql, [
                `%${note}%`,
                userId,
            ]);
            return transactions;
        };
        this.getTransactionByCategoryService = async (userId, categoryId) => {
            let sql = `SELECT * FROM transaction INNER JOIN category ON transaction.categoryId = category.id INNER JOIN wallet ON transaction.walletId = wallet.id WHERE category.id = ${categoryId} AND wallet.userId = ${userId}`;
            let transactions = await this.transactionRepository.query(sql);
            return transactions;
        };
        this.getTransactionByWalletService = async (userId, walletId) => {
            let sql = `SELECT * FROM transaction INNER JOIN category ON transaction.categoryId = category.id INNER JOIN wallet ON transaction.walletId = wallet.id WHERE wallet.id = ${walletId} AND wallet.userId = ${userId}`;
            let transactions = await this.transactionRepository.query(sql);
            return transactions;
        };
        this.getTotalExpense = async (walletId, userId) => {
            let sql = `select sum(amount) as totalExpense from transaction inner join category on transaction.categoryId = category.id inner join wallet on transaction.walletId = wallet.id where walletId = ${walletId} and category.transactionType = 'expense'`;
            let totalExpense = await this.transactionRepository.query(sql);
            return totalExpense[0].totalExpense;
        };
        this.transactionRepository = data_source_1.AppDataSource.getRepository(transaction_1.Transaction);
    }
}
exports.default = new TransactionService();
//# sourceMappingURL=transactionService.js.map