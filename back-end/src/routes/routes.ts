import { Router } from 'express'
import {
    getAllImmobiles,
    getImmobileById,
} from '../controllers/immobileController'
import { getProfileByUserId } from '../controllers/profileController'

const router = Router()

router.get('/immobiles', getAllImmobiles)
router.get('/immobiles/:id', getImmobileById)

router.get('/profile/:user_id', getProfileByUserId)

export default router
