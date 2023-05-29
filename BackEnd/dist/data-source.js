"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.connectDB = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const wallet_1 = require("./entity/wallet");
const category_1 = require("./entity/category");
const transaction_1 = require("./entity/transaction");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "casestudymd5",
    synchronize: true,
    logging: false,
    entities: [user_1.User, wallet_1.Wallet, category_1.Category, transaction_1.Transaction],
    migrations: ["./dist/src/migrations/*.js"],
});
exports.AppDataSource = AppDataSource;
async function connectDB() {
    try {
        let connect = await AppDataSource.initialize();
        if (connect) {
            console.log("Connect DB successfully");
        }
        else {
            console.log("Database connect error");
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.connectDB = connectDB;
//# sourceMappingURL=data-source.js.map