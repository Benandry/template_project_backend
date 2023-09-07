import express from "express";
import cors from "cors";
import connectDatabase from "./config/database";
import userRoute from "./routes/userRoute";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

const port: Number = parseInt(process.env.PORT as string, 10) || 8000;
dotenv.config();

const startServer = async () => {
  try {
    await connectDatabase(); // Appel de la fonction de connexion

    // Apell route user
    app.use("/user", userRoute);

    app.listen(port, () => {
      console.log(`Server is running http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
