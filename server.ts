import app from './app/app'
import { successLogger } from './app/shared/logger'
import connectToDB from './db'
import { config } from "dotenv"


config()


connectToDB()

app.listen(process.env.port, () => {
  successLogger.info(`Example app listening on port ${process.env.port}`)
})
