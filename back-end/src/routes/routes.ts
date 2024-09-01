import { Router } from 'express'
import {
    getAllImmobiles,
    getImmobileById,
} from '../controllers/immobileController'
import {
    createProfile,
    getAllProfiles,
    getProfileByUserId,
    updateProfile,
} from '../controllers/profileController'

const router = Router()

router.get('/immobiles', getAllImmobiles)
router.get('/immobiles/:id', getImmobileById)

router.get('/profiles', getAllProfiles)
router.get('/profile/:user_id', getProfileByUserId)
router.put('/profile/:user_id', updateProfile)
router.post('/profile', createProfile)

export default router
