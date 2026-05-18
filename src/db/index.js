import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: DB_NAME,
    });
    console.log(
      `\n MongoDB connected✅, DB HOST: ${connectionInstance.connection.host}`
    );
    await mongoose.connection.db.collection("test").insertOne({
      name: "Abheek",
    });

    console.log("Test document inserted 👍");
  } catch (error) {
    console.log("Mongo URL: ", process.env.MONGODB_URL);
    console.log("Mongo DB connection error!", error);
    // process.exit(1);
  }
};
export default connectDB;
