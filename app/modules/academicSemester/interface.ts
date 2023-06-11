import { Document, Model } from "mongoose";
export type Month =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';
export type Title =
    | "Autumn"
    | "Summer"
    | "Fall"
export type Code =
    | "01"
    | "02"
    | "03"

export interface IAcademicSemester {
    title: Title;
    startMonth: Month;
    endMonth: Month;
    code: Code;
    year: number;
}
export interface IAcademicSemesterModel extends Model<Document>, IAcademicSemester { }
