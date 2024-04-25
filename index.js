import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import hotelsRoute from "./Routes/Hotel.js"
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Mongodb Disconnected");
});

connect();

app.use(cookieParser())
app.use(express.json())

//middlewares
app.use("/api/hotels" , hotelsRoute)

app.use((err,req, res, next) =>{
  const errorStatus = err.message || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success:false,
    status:errorMessage,
    message:errorMessage,
    stack:err.stack
  })
})


app.get("/" , (req, res) =>{
  res.send("Api working!")
})

app.listen(8000, () => {
  console.log("Connected to Backend!");
});