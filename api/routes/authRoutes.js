import { Router } from 'express'
import { signin, signup, logout } from '../controllers/authController.js'

const router = Router()

router.get('/logout', logout)
router.post('/signin', signin)
router.post('/signup', signup)

export default router