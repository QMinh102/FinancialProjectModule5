import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm"
import { Category } from "./category";
import {Wallet} from "./wallet";
import walletController from "../controllers/walletController";

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @Column({type:'date'})
    date: string

    @Column()
    note: string

    @ManyToOne(()=>Category, (category)=>category.transaction)
    category: Category

    @ManyToOne(()=>Wallet, (wallet)=>wallet.transaction)
    wallet: Wallet


}