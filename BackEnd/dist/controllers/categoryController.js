"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryService_1 = __importDefault(require("../services/categoryService"));
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            let categoryList = await this.CategoryService.getAll();
            res.status(200).json(categoryList);
        };
        this.getOne = async (req, res) => {
            let id = req.query.id;
            let category = await this.CategoryService.getOne(id);
            res.status(200).json(category);
        };
        this.create = async (req, res) => {
            await this.CategoryService.create(req.body);
            res.status(200).json({ message: "create category success !!" });
        };
        this.update = async (req, res) => {
            let id = req.query.id;
            await this.CategoryService.update(id, req.body);
            res.status(200).json({ message: "update category success !!" });
        };
        this.remove = async (req, res) => {
            let id = req.query.id;
            await this.CategoryService.remove(+id);
            res.status(200).json({ message: "delete category success !!" });
        };
        this.CategoryService = categoryService_1.default;
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map