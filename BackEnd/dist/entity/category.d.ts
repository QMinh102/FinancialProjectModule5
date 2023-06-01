import { Transaction } from "./transaction";
export declare class Category {
    id: number;
    name: string;
    icon: string;
    transactionType: string;
    transaction: Transaction[];
}
