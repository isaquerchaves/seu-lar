import { Request, Response } from 'express'
import Profile from '../models/profile'

export const getProfileByUserId = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const user_id = req.params.user_id
        const profile = await Profile.findOne({ where: { user_id } })

        if (!profile) {
            res.status(404).json({ mesage: 'Perfil não encontrado' })
            return
        }
        res.status(200).json({ profile })
    } catch (err) {
        res.status(500).json({ error: 'Error' })
    }
}

export const updateProfile = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const user_id = req.params.user_id
        const { creci, phone, city, state } = req.body

        const profile = await Profile.findOne({ where: { user_id } })

        if (!profile) {
            res.status(404).json({ message: 'Perfil não encontrado' })
            return
        }

        // Atualizar o perfil
        await profile.update({ creci, phone, city, state })

        res.status(200).json({ profile })
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar perfil' })
    }
}
