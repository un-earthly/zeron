import mongoose, { Schema } from 'mongoose';
import { IAcademicSemesterModel } from './interface';

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

export const AcademicSemesterModel = mongoose.model<IAcademicSemesterModel>('AcademicSemester', AcademicSemesterSchema);
