import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const DBConnect = async () => {
  try {
    const connections = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(connections.connection.host);
  } catch (error) {
    console.log("DB connection Error", error);
  }
};
