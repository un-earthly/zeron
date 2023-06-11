import express from 'express'
import validateReq from '../../middlewares/validateRequest';
import { createAcademicSemesterZodSchema } from './validation';
import { createSemester } from './controller'
const router = express.Router()

router.post(
    '/create',
    validateReq(createAcademicSemesterZodSchema),
    createSemester
);

export default router;