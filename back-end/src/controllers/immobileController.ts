import { Request, Response } from 'express'
import Immobile from '../models/immobile'
import { error } from 'console'

export const getAllImmobiles = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const immobiles = await Immobile.findAll()
        res.status(200).json(immobiles)
    } catch (err) {
        res.status(500).json({ error: (err as Error).message })
    }
}

export const getImmobileById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const id = req.params.id
        const immobile = await Immobile.findByPk(id)

        if (!immobile) {
            res.status(404).json({ mesage: 'Imóvel não encontrado' })
            return
        }
        res.status(200).json({ immobile })
    } catch (err) {
        res.status(500).json({ error: 'Error' })
    }
}
