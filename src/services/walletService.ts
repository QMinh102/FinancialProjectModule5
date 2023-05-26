import {AppDataSource} from "../data-source";
import {Wallet} from "../entity/wallet";
import {query} from "express";

class WalletService {
    private walletRepository;
    constructor(){ 
        this.walletRepository = AppDataSource.getRepository(Wallet)
    }


    getAll = async (idUser) =>{
        return await this.walletRepository.find({
            where:{userId : idUser},
            relations: {user:true}
        })
    }

    getOne = async (id) =>{
        return await this.walletRepository.find({
            where:{id:id}
        })
    }

    create = async (newWallet)=>{
        await this.walletRepository.save(newWallet);
    }

    update = async (id,newWallet)=>{
        await this.walletRepository.update({id:id},newWallet);
    }

    remove = async (id) =>{
        await this.walletRepository.delete(id)
    }

    //Tổng thu và chi của từng ví

    getTotalIncomeAndExpenseOfOneWallet = async (id) =>{
        let sql = `select wallet.name, sum(case when category.transactionType = \'income\' then transaction.amount else 0 end ) as totalIncome, sum(case when category.transactionType = \'expense\' then transaction.amount else 0 end) as totalExpense from transaction inner join wallet on transaction.walletId = wallet.id inner join category on transaction.categoryId = category.id where wallet.id = wallet.id = ${id}`
        let totalIncomeAndExpenseOfOneWallet = await this.walletRepository.query(sql)

    }


    //Tổng thu và chi total


    //Tổng thu và chi theo từng tháng

    // Tổng thu và chi theo từng ví
    getTotalIncomeAndExpenseByEachWallet = async () =>{
        let totalIncomeAndExpenseByEachWallet

    }




}

export default new WalletService();