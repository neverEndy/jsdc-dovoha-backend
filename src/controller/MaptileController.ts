import {Request, Response} from "express";
import {getRepository} from "typeorm";
import { Maptile } from "../entity/Maptile";

export const getAll = async (req: Request, res: Response) => {

    const repo = getRepository( Maptile )
    const maptiles = await repo.find()
    res.status(200).json(maptiles); 
}