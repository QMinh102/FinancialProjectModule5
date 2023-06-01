"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const wallet_1 = require("../entity/wallet");
class WalletService {
    constructor() {
        this.getAll = async (idUser) => {
            console.log(await this.walletRepository.find({
                relations: { user: true },
                where: {
                    user: {
                        id: idUser
                    }
                }
            }));
        };
        this.getOne = async (id) => {
            return await this.walletRepository.find({
                where: { id: id }
            });
        };
        this.create = async (newWallet) => {
            await this.walletRepository.save(newWallet);
        };
        this.update = async (id, newWallet) => {
            await this.walletRepository.update({ id: id }, newWallet);
        };
        this.remove = async (id) => {
            await this.walletRepository.delete(id);
        };
        this.getTotalOfWallet = async (walletId) => {
            let sql = `select total
                   from wallet
                   where id = ${walletId}`;
            let totalOfWallet = await this.walletRepository.query(sql);
            return totalOfWallet[0].total;
        };
        this.walletRepository = data_source_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.default = new WalletService();
//# sourceMappingURL=walletService.js.map