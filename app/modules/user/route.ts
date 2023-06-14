import express from 'express'
import validateReq from '../../middlewares/validateRequest';
import { createUserZodSchema } from './validation';
import { createUser } from './controller'
const router = express.Router()

router.post('/create', validateReq(createUserZodSchema), createUser)

export default router