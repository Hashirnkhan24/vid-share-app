import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config()
connectDB()





/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("Error", (error) => {
            console.error("ERROR " + error);
            throw error;;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Process listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: " + error);
        throw new Error;
    }
})()
*/