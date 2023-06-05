import { Category } from "./category";
import { Wallet } from "./wallet";
export declare class Transaction {
    id: number;
    amount: number;
    date: string;
    note: string;
    category: Category;
    wallet: Wallet;
}
