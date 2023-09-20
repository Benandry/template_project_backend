import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema: Schema = new Schema({
  imageUrl: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  birth: { type: Date, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  role: { type: String, required: true },
});

export default mongoose.model<IUser>("User", userSchema);
