import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Maptile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    name: string;

}