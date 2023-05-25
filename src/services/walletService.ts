
class WalletService {
    private walletRepository
    constructor(){ 
        this.walletRepository
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
}

export default new WalletService();