import * as crypto from "crypto";

export const generatedSalt = (): string => {
  return crypto.randomBytes(64).toString("hex");
};
