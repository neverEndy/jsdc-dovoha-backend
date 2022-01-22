import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MultiPolygon } from "geojson"; 

@Entity()
export class Minsyong_village {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    "VILLCODE": string;

    @Column({nullable: true})
    "COUNTYNAME": string;

    @Column({nullable: true})
    "TOWNNAME": string;

    @Column({nullable: true})
    "VILLNAME": string;

    @Column({nullable: true})
    "VILLENG": string;

    @Column({nullable: true})
    "COUNTYID": string;

    @Column({nullable: true})
    "COUNTYCODE": string;

    @Column({nullable: true})
    "TOWNID": string;

    @Column({nullable: true})
    "TOWNCODE": string;

    @Column({nullable: true})
    "NOTE": string;

    @Column({type: 'geometry'})
    geom: MultiPolygon

}