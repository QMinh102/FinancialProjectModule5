import {AppDataSource} from "../data-source";
import {Transaction} from "../entity/transaction";


class TransactionService {
private transactionRepository;
constructor() {
    this.transactionRepository = AppDataSource.getRepository(Transaction)
}



    addTransactionService = async (transaction) => {
        let newTransaction = await this.transactionRepository.save(transaction);
        return newTransaction
    }
    deleteTransactionService = async (id) => {
        await this.transactionRepository.delete({id:id});
    }
    getOneTransactionService = async(id) =>{
        let transaction = await this.transactionRepository.find({
            relations: {
                category:true,
                wallet: true,
            },
            where: {
                id:id
            }
        });
        return transaction;
    }
    updateOneTransactionService = async(id, updateTransaction ) => {
        await this.transactionRepository.update({id: id}, updateTransaction)
    }



    //Tổng thu và chi của từng ví
    getTotalIncomeAndExpenseOfOneWalletService = async (id) =>{
        let sql = `select wallet.name, sum(case when category.transactionType = \'income\' then transaction.amount else 0 end ) as totalIncome, sum(case when category.transactionType = \'expense\' then transaction.amount else 0 end) as totalExpense from transaction inner join wallet on transaction.walletId = wallet.id inner join category on transaction.categoryId = category.id where wallet.id = wallet.id = ${id}`
        let totalIncomeAndExpenseOfOneWallet = await this.transactionRepository.query(sql);
        return totalIncomeAndExpenseOfOneWallet;
    }

    //Tổng thu và chi total
    getTotalIncomeAndExpenseService = async (userId)=>{
     let sql = `select sum(case when category.transactionType = 'income' then transaction.amount else 0 end ) as totalIncome, sum(case when category.transactionType = 'expense' then transaction.amount else 0 end) as totalExpense from transaction inner join wallet on transaction.walletId = wallet.id inner join category on transaction.categoryId = category.id where wallet.userId = ${userId}`
     let totalIncomeAndExpense = await this.transactionRepository.query(sql);
     return totalIncomeAndExpense
    }

    //Tổng thu và chi theo từng tháng của năm
    getTotalIncomeAndExpenseByMonthService = async (year, userId)=>{
        let sql = `select date_format(transaction.date, '%m%Y') as month_year, sum(case when category.transactionType = 'income' then transaction.amount else 0 end) as totalIncome, sum(case when category.transactionType = 'expense' then transaction.amount else 0 end) as totalExpense from transaction inner join wallet on transaction.walletId = wallet.id inner join category on transaction.categoryId = category.id where YEAR(transaction.date) = ${year} and wallet.userId = ${userId} group by month_year order by month_year`
        let totalIncomeAndExpenseByMonth = await this.transactionRepository.query(sql);
        return totalIncomeAndExpenseByMonth
    }


    // Tổng thu và chi theo từng ví
    getTotalIncomeAndExpenseByEachWalletService = async (userId) =>{
        let sql = `select wallet.name, sum(case when category.transactionType = 'income' then transaction.amount else 0 end) as income, sum(case when category.transactionType = 'expense' then transaction.amount else 0 end) as expense from transaction inner join wallet on transaction.walletId = wallet.id inner join category on transaction.categoryId = category.id where wallet.userId = ${userId} group by wallet.id`
        let totalIncomeAndExpenseByEachWallet = await this.transactionRepository.query(sql);
        return totalIncomeAndExpenseByEachWallet;
    }




}

export default new TransactionService();