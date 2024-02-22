"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const wallet_1 = require("../entity/wallet");
const transactionService_1 = __importDefault(require("./transactionService"));
class WalletService {
    constructor() {
        this.getAll = async (idUser) => {
            return await this.walletRepository.find({
                where: { user: { id: idUser } }
            });
        };
        this.getOne = async (id) => {
            return await this.walletRepository.findOne({
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
            await transactionService_1.default.removeAll(id);
            await this.walletRepository.delete(id);
        };
        this.getTotalOfWallet = async (walletId) => {
            let sql = `select total from wallet where id = ${walletId}`;
            let totalOfWallet = await this.walletRepository.query(sql);
            return totalOfWallet[0].total;
        };
        this.walletRepository = data_source_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.default = new WalletService();
//# sourceMappingURL=walletService.js.map