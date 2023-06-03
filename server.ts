import app from "./app/app"
import connectToDB from "./db"
require('dotenv').config()

connectToDB()

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
})