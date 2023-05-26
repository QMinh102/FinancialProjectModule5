"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const categoryRouter = (0, express_1.Router)();
categoryRouter.get('/', categoryController_1.default.getAll);
categoryRouter.get('/one/', categoryController_1.default.getOne);
categoryRouter.post('/', categoryController_1.default.create);
categoryRouter.put('/', categoryController_1.default.update);
categoryRouter.delete('/', categoryController_1.default.remove);
exports.default = categoryRouter;
//# sourceMappingURL=categoryRouter.js.map