import { Request, Response } from 'express'
import Profile from '../models/profile'
import User from '../models/user'
import { Sequelize } from 'sequelize'

export const getAllProfiles = async (req: Request, res: Response) => {
    try {
        const profiles = await Profile.findAll({
            include: {
                model: User,
                attributes: ['name', 'email', 'image'],
            },
        })
        res.status(200).json({ profiles })
    } catch (error) {
        console.error('Erro ao buscar perfis:', error)
        res.status(500).json({ error: 'Erro ao buscar perfis' })
    }
}

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

        // Verificar se o creci já existe em outro perfil
        const existingCreci = await Profile.findOne({ where: { creci } })
        if (existingCreci && existingCreci.id !== profile.id) {
            res.status(400).json({ message: 'Creci já está em uso' })
            return
        }

        // Atualizar o perfil
        await profile.update({ creci, phone, city, state })

        res.status(200).json({ profile })
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar perfil' })
    }
}

export const createProfile = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { user_id, creci, phone, city, state } = req.body

        if (!user_id || !creci || !phone || !city || !state) {
            res.status(400).json({
                message: 'Todos os campos são obrigatórios',
            })
            return
        }

        // Verificar se o creci já existe em outro perfil
        const existingCreci = await Profile.findOne({ where: { creci } })
        if (existingCreci) {
            res.status(400).json({ message: 'Creci já está em uso' })
        }

        const newProfile = await Profile.create({
            user_id,
            creci,
            phone,
            city,
            state,
        })

        res.status(201).json({ profile: newProfile })
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar perfil' })
    }
}
