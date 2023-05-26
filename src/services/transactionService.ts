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



}

export default new TransactionService();