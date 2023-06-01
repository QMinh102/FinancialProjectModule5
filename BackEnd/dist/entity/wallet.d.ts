import { User } from "./user";
import { Transaction } from "./transaction";
export declare class Wallet {
    id: number;
    name: string;
    total: number;
    user: User[];
    transaction: Transaction[];
}
