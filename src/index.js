// require('dotenv').config({path: './env'})

import dotenv from 'dotenv';
dotenv.config({ path: "./.env" }); 
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import {app} from "./app.js"
// SECOND APPROACH

app.on("Error", (error)=>{
  console.log("Error is: ", error);
  
})
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on PORT: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB connection failed!!!", error);
  });

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
