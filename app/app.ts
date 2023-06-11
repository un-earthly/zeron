import express, { Request, Response } from 'express'
const app = express()
import cors from 'cors'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import userRoutes from "./modules/user/route"
import academicSemesterRoutes from "./modules/academicSemester/route"
app.use(express.json())
app.use(express.urlencoded())
app.use(cors)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/academic-semester", academicSemesterRoutes)

app.use(globalErrorHandler)
export default app
