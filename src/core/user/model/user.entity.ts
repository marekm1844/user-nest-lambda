import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";


@Entity()
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @Column({ nullable: true })
    phoneNo: string

    @Column({ nullable: true })
    companyName: string

    @Column({ nullable: true })
    vatId: string

}
