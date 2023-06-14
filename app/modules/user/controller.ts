import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { IUser } from './interface';
import { createUserService } from './service';

const createStudent: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const { student, ...userData } = req.body;
        const result = await createUserService(student, userData);

        sendResponse<IUser>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'user created successfully!',
            data: result,
        });
    }
);

export const UserController = {
    createStudent,
};