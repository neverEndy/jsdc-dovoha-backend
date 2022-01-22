import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Layer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    name: string;

    @Column()
    type: string;

}