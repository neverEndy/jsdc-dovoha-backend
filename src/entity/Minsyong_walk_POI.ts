import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from "geojson"; 

@Entity()
export class Minsyong_walk_POI {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    "名稱": string;

    @Column({nullable: true})
    "主分類": string;

    @Column({nullable: true})
    "次分類": string;

    @Column({nullable: true})
    "小分類": string;

    @Column({nullable: true})
    "時間": number;

    @Column({nullable: true})
    "詳細資訊": string;

    @Column({type: 'geometry'})
    geom: Point

}