import { NextFunction, Request, Response } from 'express'
import { createUserService } from './service'

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user } = req.body
        const result = await createUserService(user)
        res.status(200).json({
            success: true,
            message: 'user created successfully!',
            data: result,
        })
    } catch (err) {
        next(err)
    }
}