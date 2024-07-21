import { Router } from 'express'
import {
    getAllImmobiles,
    getImmobileById,
} from '../controllers/immobileController'

const router = Router()

router.get('/immobiles', getAllImmobiles)
router.get('/immobiles/:id', getImmobileById)

export default router
