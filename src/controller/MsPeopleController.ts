import {Request, Response} from "express";
import {getRepository} from "typeorm";
import { Minsyong_people } from "../entity/Minsyong_people";

export const getAll = async (req: Request, res: Response) => {

    const repo = getRepository( Minsyong_people )
    const results = await repo.find()
    res.status(200).json(results); 
}