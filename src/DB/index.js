import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export async function connectDB() {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.DB_URL}/${DB_NAME}`
    );
    console.log(
      "Successfully connected with the host",
      dbConnection.connection.host
    );
  } catch (error) {
    console.log("Error Connecting with the DB", error);
    throw error;
  }
}
