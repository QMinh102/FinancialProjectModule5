"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            await userService_1.default.createNewUser(req.body);
            res.status(201).json({ message: "User register succeeded !!" });
        };
        this.login = async (req, res) => {
            const check = await userService_1.default.checkUser(req.body.username);
            res.status(200).json(check);
        };
        this.UserService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map