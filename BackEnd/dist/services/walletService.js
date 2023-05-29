"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_1 = require("../entity/wallet");
class WalletService {
    constructor() {
        this.getAll = async (idUser) => {
            return await this.walletRepository.find({
                where: { userId: idUser },
                relations: { user: true }
            });
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
        this.walletRepository = wallet_1.Wallet;
    }
}
exports.default = new WalletService();
//# sourceMappingURL=walletService.js.map