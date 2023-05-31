"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const walletRouter_1 = __importDefault(require("./walletRouter"));
const categoryRouter_1 = __importDefault(require("./categoryRouter"));
const transactionRouter_1 = __importDefault(require("./transactionRouter"));
x;
const router = (0, express_1.Router)();
router.use("/user", userRouter_1.default);
router.use("/wallet", walletRouter_1.default);
router.use("/category", categoryRouter_1.default);
router.use("/transaction", transactionRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map