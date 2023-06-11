import express from 'express'
import validateReq from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { createUser } from './controller'
const router = express.Router()

router.post('/create', validateReq(UserValidation.createUserZodSchema), createUser)

export default router