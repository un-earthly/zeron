import { error, log } from 'console';
import mongoose from 'mongoose';

const connectToDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.pfaf1en.mongodb.net/zeron?retryWrites=true&w=majority`);
        log("connect to database")
    } catch (err) {
        error(err)
    }

}
export default connectToDB