import {Request, Response} from "express";
import {getRepository} from "typeorm";
import { GoodMapPOI } from "../entity/GoodMapPOI";

export const getAll = async (req: Request, res: Response) => {

    const repo = getRepository( GoodMapPOI )
    const pois = await repo.find()
    res.status(200).json(pois); 
}