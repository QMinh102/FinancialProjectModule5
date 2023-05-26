import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm"
import { Wallet } from "./wallet";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    age: number

    @Column()
    job: string

    @OneToMany( () => Wallet, (wallet) => wallet.user)
    @JoinColumn()
    wallet: Wallet[]
}