import dotenv from "dotenv";
import { connectDB } from "./DB/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Error running the server ${error}`);
    });
    app.listen(process.env.PORT || 3001, () => {
      console.log(`App is running on the port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Catched error running the server", err);
  });
