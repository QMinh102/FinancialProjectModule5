import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import { Transaction } from "./transaction";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({type: "text"})
    icon: string

    @Column()
    transactionType: string

    @ManyToOne ( () => Transaction, (transaction) => transaction.category)
    transaction: Transaction
}