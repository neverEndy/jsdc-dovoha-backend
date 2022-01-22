import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MultiPolygon } from "geojson"; 

@Entity()
export class Minsyong_town {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    "COUNTYNAME": string;

    @Column({nullable: true})
    "TOWNNAME": string;

    @Column({nullable: true})
    "COUNTYID": string;

    @Column({nullable: true})
    "COUNTYCODE": string;

    @Column({nullable: true})
    "TOWNID": number;

    @Column({nullable: true})
    "TOWNCODE": string;

    @Column({type: 'geometry'})
    geom: MultiPolygon

}