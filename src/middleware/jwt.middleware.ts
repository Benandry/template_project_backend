// src/middleware/jwtMiddleware.ts

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Récupérez la clé secrète JWT depuis les variables d'environnement
const secretKey =
  process.env.JWT_SECRET_KEY ||
  "f5719d73283ebece37cd99b00f2f7ffdea762a80bfb700d7afdc2efb383abb18";

export function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  if (!secretKey) {
    return res
      .status(500)
      .json({ message: "JWT_SECRET is not defined in .env" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    // req.userId = decoded.userId; // Stockez des informations pertinentes du token dans la requête, par exemple l'ID de l'utilisateur
    next();
  });
}
