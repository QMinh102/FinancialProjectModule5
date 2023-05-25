import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Category } from "./category";

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

    @OneToMany ( () => Category, (category) => category.id)
    category: Category
}