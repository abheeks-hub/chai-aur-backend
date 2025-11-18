import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

// SECOND APPROACH 








/*
import express from "express";
const app = express();

// FIRST APPROACH USING IIFE (ASYNC AWAIT)

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("MongoDB connected ✅");
    console.log(process.env.MONGODB_URL);
    app.on("Error", (error) => {
      console.error("ERROR: ", error);
    //   throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
  }
})();
*/