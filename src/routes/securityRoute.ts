import express from "express";
import { login, register } from "../controllers/securityController";

const routerSecurity = express.Router();

routerSecurity.get("/register", register);
routerSecurity.get("/login", login);

// Export router security
export default routerSecurity;
