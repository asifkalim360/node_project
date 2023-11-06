import dotenv from "dotenv";
import express from "express";
const app = express();
import connectDB from "./db/index.js";


dotenv.config({
    path: "./env"
});

connectDB();
















/*
//IFFE function using for DB connection.
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log('MongoDB Connection Error', error);
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })


    } catch (error) {
        console.error("ERROR: ", error)
        // throw error
    }
})()
*/