import { RequestHandler } from "express";
import { createSemesterService } from "./service";

export const createSemester: RequestHandler = async (req, res, next) => {
    try {
        const { ...academicSemesterData } = req.body;
        const result = await createSemesterService(
            academicSemesterData
        );

        res.status(200).json({
            success: true,
            message: 'Academic semester is created successfully!',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};