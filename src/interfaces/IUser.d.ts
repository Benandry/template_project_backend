import { Document } from "mongoose";

export interface IUser extends Document {
  imageUrl: string;
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

export interface IUserFormatted {
  _id: string;
  first_name: string;
  last_name: string;
  username: string;
  birth: Date;
  gender: string;
  email: string;
  role: string;
  imageUrl: string;
}
