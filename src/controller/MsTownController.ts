import {Request, Response} from "express";
import {getRepository} from "typeorm";
import { Minsyong_town } from "../entity/Minsyong_town";

export const getAll = async (req: Request, res: Response) => {

    const repo = getRepository( Minsyong_town )
    const results = await repo.find()
    res.status(200).json(results); 
}