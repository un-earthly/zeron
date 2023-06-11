import {
    Code,
    Month,
    Title,
} from './interface';

export const academicSemesterTitles: Title[] = [
    'Autumn',
    'Summer',
    'Fall',
];

export const academicSemesterCodes: Code[] = [
    '01',
    '02',
    '03',
];

export const acdemicSemesterMonths: Month[] = [
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
];

export const academicSemesterTitleCodeMapper: {
    [key: string]: string;
} = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
};