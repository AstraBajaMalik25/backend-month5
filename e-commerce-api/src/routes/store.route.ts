import { Router } from 'express'
import { authenticate } from '../middlewares/auth.middleware'
import { createStore } from '../controllers/store.controller'

const router = Router()

router.post('/', authenticate, createStore)

export default router
