import * as crypto from "crypto";

export const hashedPassword = (password: string, salt: string) => {
  return crypto.createHmac("sha256", salt).update(password).digest("hex");
};
