"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionController_1 = __importDefault(require("../controllers/transactionController"));
const transactionRouter = (0, express_1.Router)();
transactionRouter.get('/', transactionController_1.default.getOne);
exports.default = transactionRouter;
//# sourceMappingURL=transactionRouter.js.map