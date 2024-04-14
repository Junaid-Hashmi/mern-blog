import { error } from "console";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MONGODB connection Success!!");
  })
  .catch((error) => {
    console.error("MONGODB connection failed", error);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
