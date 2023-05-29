"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const routers_1 = __importDefault(require("./routers"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)(process.env.USER_CODE_SECRET));
(0, data_source_1.connectDB)().then(() => {
    console.log('Connect Database Succeeded');
});
app.use((0, cors_1.default)());
app.use('', routers_1.default);
app.listen(3001, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map