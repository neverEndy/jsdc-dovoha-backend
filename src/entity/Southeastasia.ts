import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from "geojson"; 

@Entity()
export class Southeastasia {

    @PrimaryGeneratedColumn()
    id_0: number;

    @Column()
    id: number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    country: string;

    @Column({nullable: true})
    lon: number;

    @Column({nullable: true})
    lat: number;

    @Column({nullable: true})
    address: string;

    @Column({nullable: true})
    posInfo: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    openHours: string;

    @Column({nullable: true})
    offDay: string;

    @Column({nullable: true})
    status: string;

    @Column({nullable: true})
    food: string;

    @Column({nullable: true})
    note: string;

    @Column({type: 'geometry'})
    geom: Point

}