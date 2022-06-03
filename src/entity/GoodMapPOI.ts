import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from "geojson"; 

@Entity()
export class GoodMapPOI {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    "地點": string;

    @Column({nullable: true})
    "x": number;

    @Column({nullable: true})
    "y": number;

    @Column({nullable: true})
    "介紹": string;

    @Column({nullable: true})
    "更多連結": string;

    @Column({type: 'geometry'})
    geom: Point

}