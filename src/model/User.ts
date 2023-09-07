import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.model<IUser>("User", userSchema);