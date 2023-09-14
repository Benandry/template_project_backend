import jwt from "jsonwebtoken";

const secretKey: string =
  process.env.JWT_SECRET_KEY ||
  "f5719d73283ebece37cd99b00f2f7ffdea762a80bfb700d7afdc2efb383abb18"; // Remplacez par une clé secrète réelle

export function generateToken(payload: any): string {
  return jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Vous pouvez ajuster la durée de validité (expiresIn)
}

export function verifyToken(token: string): any {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error("Token invalide");
  }
}
