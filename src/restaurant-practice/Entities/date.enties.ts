import { CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity('date')
export class DateSchema {
    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate : Date

}