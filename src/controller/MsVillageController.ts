import {Request, Response} from "express";
import {getRepository} from "typeorm";
import { Minsyong_village } from "../entity/Minsyong_village";

export const getAll = async (req: Request, res: Response) => {

    const repo = getRepository( Minsyong_village )
    const results = await repo.find()
    res.status(200).json(results); 
}