import ApiError from "../../errors/ApiError";
import { academicSemesterTitleCodeMapper } from "./constant";
import { IAcademicSemester } from "./interface";
import httpStatus from 'http-status';
import { AcademicSemesterModel } from "./model";

export const createSemesterService = async (
    payload: IAcademicSemester
): Promise<IAcademicSemester> => {
    if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Code');
    }

    const result = await AcademicSemesterModel.create(payload);
    return result;
};
