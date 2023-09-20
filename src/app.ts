import express from "express";
import cors from "cors";
import connectDatabase from "./config/database";
import userRoute from "./routes/userRoute";
import dotenv from "dotenv";
import routerSecurity from "./routes/securityRoute";
import { staticUploads } from "./helpers/staticUpload";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config({ path: "./.env" });
const port: Number = parseInt(process.env.PORT as string, 10);

const startServer = async () => {
  try {
    await connectDatabase(); // Appel de la fonction de connexion
    // ROUTES
    app.use("/user", userRoute); // Apell route user
    app.use("/staticUploads", staticUploads); // Apell route security
    app.use("/", routerSecurity); // Apell route security
    app.listen(port, () => {
      console.log(`Server is running http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
