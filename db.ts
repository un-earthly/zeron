import { error, log } from 'console'
import mongoose from 'mongoose'
import { errorlogger, successLogger } from './app/shared/logger'

const connectToDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.pfaf1en.mongodb.net/zeron?retryWrites=true&w=majority`
    )
    successLogger.info(`🛢   Database is connected successfully`)
  } catch (err) {
    errorlogger.error('Failed to connect database', err)
  }
}
export default connectToDB
