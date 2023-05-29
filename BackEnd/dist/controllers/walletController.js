"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const walletService_1 = __importDefault(require("../services/walletService"));
class WalletController {
    constructor() {
        this.getAll = async (req, res) => {
            let idUser = "getToken";
            let allWallet = await walletService_1.default.getAll(idUser);
            res.status(200).json(allWallet);
        };
        this.getOne = async (req, res) => {
            let id = req.query.id;
            let wallet = await walletService_1.default.getOne(id);
            res.status(200).json(wallet);
        };
        this.create = async (req, res) => {
            let idUser = "getToken";
            req.body.idUser = idUser;
            await walletService_1.default.create(req.body);
            res.status(204).json({ message: "create wallet success" });
        };
        this.update = async (req, res) => {
            let id = req.query.id;
            await walletService_1.default.update(id, req.body);
            res.status(204).json({ message: "update wallet success" });
        };
        this.remove = async (req, res) => {
            let id = req.query.id;
            await walletService_1.default.remove(id);
            res.status(204).json({ message: "delete wallet success" });
        };
    }
}
exports.default = new WalletController();
//# sourceMappingURL=walletController.js.map