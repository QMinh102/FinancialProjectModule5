import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne} from "typeorm"
import { User } from "./user";

@Entity()
export class Wallet {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    total: number

    @ManyToOne( () => User, (user) => user.walletID)
    user: User
}