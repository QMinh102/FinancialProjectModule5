import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/user";
import { Category } from "./entity/category";
import { Wallet } from "./entity/wallet";
import { Transaction } from "./entity/transaction";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "casestudymd5",
    synchronize: true,
    entities: [User, Category, Wallet, Transaction],
    migrations: ["dist/src/entity/*.js"],
})