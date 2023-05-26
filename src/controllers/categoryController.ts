import categoryService from "../services/categoryService";
import { Request,Response } from "express";

class CategoryController {
    constructor(){}
    getAll= async (req:Request,res:Response)=>{
        let categoryList= await categoryService.getAll();
        res.status(200).json(categoryList)
    }
    getOne= async (req:Request,res:Response)=>{
        let id = req.query.id
        let category = await categoryService.getOne(id)
        res.status(200).json(category)
    }
    create = async (req:Request,res:Response)=>{
        await categoryService.create(req.body)
        res.status(200).json({message: "create category success !!"})
    }
    update = async (req:Request,res:Response)=>{
        let id = req.query.id
        await categoryService.update(id,req.body)
        res.status(200).json({message: "update category success !!"})
    }
    remove = async (req:Request,res:Response)=>{
        let id = req.query.id
        await categoryService.remove(id)
        res.status(200).json({message: "delete category success !!"})
    }
}
export default new CategoryController()
