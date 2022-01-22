import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Layer} from "../entity/Layer"

export const getAll = async (req: Request, res: Response) => {

    const layerRepo = getRepository( Layer )
    const layers = await layerRepo.find()
    res.status(200).json(layers); 
}