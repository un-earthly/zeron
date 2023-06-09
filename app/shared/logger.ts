import path from "path";
import { createLogger, transports, format } from "winston";
const { combine, timestamp, label, printf } = format
import DailyRotateFile from 'winston-daily-rotate-file'
const myFormat = printf(({ level, message, label, timestamp }) => {
    const date = new Date(timestamp)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    return `${date.toDateString()} ${hour}:${minutes}:${seconds} } [${label}] ${level}: ${message}`
})


const successLogger = createLogger({
    level: 'info',
    format: combine(label({ label: 'Zeron' }), timestamp(), myFormat),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: path.join(
                process.cwd(),
                'logs',
                'winston',
                'successes',
                'zeron-%DATE%-success.log'
            ),
            datePattern: 'YYYY-DD-MM-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
})
const errorlogger = createLogger({
    level: 'error',
    format: combine(label({ label: 'Zeron' }), timestamp(), myFormat),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: path.join(
                process.cwd(),
                'logs',
                'winston',
                'successes',
                'phu-%DATE%-error.log'
            ),
            datePattern: 'YYYY-DD-MM-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
})

export { errorlogger, successLogger }


