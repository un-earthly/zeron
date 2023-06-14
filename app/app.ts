import express, { NextFunction, Request, RequestHandler, Response } from 'express'
const app = express()
import cors from 'cors'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import Route from "./router/index"
import httpStatus from 'http-status'

app.use(express.json())

app.use(express.urlencoded())

app.use(cors())


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use("/api/v1", Route)

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app
