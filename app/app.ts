import express, { Request, Response } from 'express'
const app = express()
import cors from 'cors'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import userRoutes from "./modules/user/route"
app.use(express.json())
app.use(express.urlencoded())
app.use(cors)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use("/api/v1/user", userRoutes)

app.use(globalErrorHandler)
export default app
