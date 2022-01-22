import {Request, Response} from "express";
import {getRepository} from "typeorm";
import { Southeastasia } from "../entity/Southeastasia";

export const getAll = async (req: Request, res: Response) => {

    const repo = getRepository( Southeastasia )
    const results = await repo.find()
    res.status(200).json(results); 
}