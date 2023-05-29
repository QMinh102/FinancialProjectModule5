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

    getTotalOfWallet = async (walletId) =>{
        let sql = `select total from wallet where id = ${walletId}`
        let totalOfWallet = await this.walletRepository.query(sql);
        return totalOfWallet[0].total
    }







}

export default new WalletService();