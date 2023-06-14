import mongoose, { Schema } from 'mongoose';
import { IAcademicSemesterModel } from './interface';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';

const Month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
const AcademicSemesterSchema = new Schema<IAcademicSemesterModel>({
    title: {
        type: String,
        required: true,
        enum: ["Autumn", "Summer", "Fall"]
    },
    startMonth: {
        type: String,
        required: true,
        enum: Month
    },
    endMonth: {
        type: String,
        required: true,
        enum: Month

    },
    code: {
        type: String,
        required: true,
        enum: ["01", "02", "03"]
    },
    year: {
        type: Number,
        required: true,
    }

}, {
    timestamps: true,
}
);
AcademicSemesterSchema.pre('save', async function (next) {
    const isExist = await AcademicSemesterModel.findOne({
        title: this.title,
        year: this.year,
    });
    if (isExist) {
        throw new ApiError(
            httpStatus.CONFLICT,
            'Academic semester is already exist !'
        );
    }
    next();
});
export const AcademicSemesterModel = mongoose.model<IAcademicSemesterModel>('AcademicSemester', AcademicSemesterSchema);
