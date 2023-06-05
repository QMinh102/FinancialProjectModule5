"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const category_1 = require("../entity/category");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            return await this.categoryRepository.find();
        };
        this.getOne = async (id) => {
            return await this.categoryRepository.findOneBy({ id });
        };
        this.create = async (newCategory) => {
            await this.categoryRepository.save(newCategory);
        };
        this.update = async (id, newCategory) => {
            await this.categoryRepository.update({ id: id }, newCategory);
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map