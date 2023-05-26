import "reflect-metadata";
import {DataSource} from "typeorm";
import {User} from "./entity/user";
import {Wallet} from "./entity/wallet";
import {Category} from "./entity/category";
import {Transaction} from "./entity/transaction";


const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "casestudymd5",
    synchronize: true,
    logging: false,
    entities: [User, Wallet, Category, Transaction],
    migrations: ["./dist/src/migrations/*.js"],
});

async function connectDB(){
    try{
        let connect = await AppDataSource.initialize();
        if(connect){
            console.log("Connect DB successfully");
        }else {
            console.log("Database connect error");
        }
    }catch (error){
        console.log(error)
    }
}

export {connectDB, AppDataSource}