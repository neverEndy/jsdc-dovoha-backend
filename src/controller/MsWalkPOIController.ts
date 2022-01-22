import {Request, Response} from "express";
import {getRepository} from "typeorm";
import { Minsyong_walk_POI } from '../entity/Minsyong_walk_POI'

export const getAll = async (req: Request, res: Response) => {

    const repo = getRepository( Minsyong_walk_POI )
    const results = await repo.find()
    res.status(200).json(results); 
}