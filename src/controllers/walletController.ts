import WalletService from "../services/walletService";
import { Request,Response } from "express";
class WalletController {
    constructor(){}

    getAll = async (req:Request,res:Response)=>{
        let idUser = req['decode'].userId
        let allWallet= await WalletService.getAll(idUser);
        res.status(200).json(allWallet);
    }
    
    getOne = async (req:Request,res:Response)=>{
        let id = req.query.id;
        let wallet = await WalletService.getOne(id);
        res.status(200).json(wallet);
    }

    create = async (req:Request,res:Response)=>{
        let idUser = "getToken"
        req.body.idUser = idUser;
        await WalletService.create(req.body)
        res.status(204).json({message:"create wallet success"});
    }

    update = async (req:Request,res:Response)=>{
        let id = req.query.id;
        await WalletService.update(id,req.body)
        res.status(204).json({message:"update wallet success"});
    }

    remove = async (req:Request,res:Response)=>{
        let id = req.query.id;
        await WalletService.remove(id);
        res.status(204).json({message:"delete wallet success"});
    }
}

export default new WalletController()