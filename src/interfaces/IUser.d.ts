import { Document } from "mongoose";

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  username: string;
  birth: Date;
  gender: string;
  email: string;
  password: string;
  salt: string;
  role: string;
}
