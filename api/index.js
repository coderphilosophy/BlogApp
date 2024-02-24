import express from 'express'
import connectDB from './db/index.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const app = express()

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERR: ", error)
            throw error
        })
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed !")
    })
