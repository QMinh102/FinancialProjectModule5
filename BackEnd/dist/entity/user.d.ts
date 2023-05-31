import { Wallet } from "./wallet";
export declare class User {
    id: number;
    username: string;
    password: string;
    image: string;
    job: string;
    wallet: Wallet[];
}
