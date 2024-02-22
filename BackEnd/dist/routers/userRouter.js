"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const passport_1 = require("../middlewares/passport");
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', userController_1.default.signup);
userRouter.post('/login', userController_1.default.login);
userRouter.get('/google', passport_1.passportGoogle.authenticate('google', {
    scope: ['profile', 'email']
}));
userRouter.get('/google/callback', passport_1.passportGoogle.authenticate('google'), (req, res) => {
    const token = req.user['token'];
    res.json({ token });
});
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map