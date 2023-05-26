"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const walletController_1 = __importDefault(require("../controllers/walletController"));
const walletRouter = (0, express_1.Router)();
walletRouter.get('/', walletController_1.default.getAll);
walletRouter.get('/one', walletController_1.default.getOne);
walletRouter.post('/', walletController_1.default.create);
walletRouter.put('/', walletController_1.default.update);
walletRouter.delete('/', walletController_1.default.remove);
exports.default = walletRouter;
//# sourceMappingURL=walletRouter.js.map