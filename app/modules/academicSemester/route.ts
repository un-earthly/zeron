import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
// import { UserController } from './user.controller';

import { AcademicSemesterController } from './controller';
import {createAcademicSemesterZodSchema,updateAcademicSemesterZodSchema} from './validation';
const router = express.Router();

router.post(
    '/create',
    validateRequest(createAcademicSemesterZodSchema),
    AcademicSemesterController.createSemester
);

router.get('/:id', AcademicSemesterController.getSingleSemester);

router.patch(
    '/:id',
    validateRequest(updateAcademicSemesterZodSchema),
    AcademicSemesterController.updateSemester
);

router.delete('/:id', AcademicSemesterController.deleteSemester);

router.get('/', AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;