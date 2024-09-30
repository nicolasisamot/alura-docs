import "dotenv/config";
import mongoose from "mongoose";

export const connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("Database connected"))
    .catch((err) => console.log(err));
};
