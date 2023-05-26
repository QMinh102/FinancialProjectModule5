import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn} from "typeorm"
import { User } from "./user";
import {Transaction} from "./transaction";

@Entity()
export class Wallet {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    total: number

    @ManyToOne( () => User, (user) => user.wallet)
    @JoinColumn()
    user: User[]

    @ManyToOne( () => Transaction, (transaction) => transaction.wallet)
    @JoinColumn()
    transaction: Transaction[]
}