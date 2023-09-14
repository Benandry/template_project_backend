import { NextFunction, Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
import User from "../model/User";
import { generatedSalt } from "../helpers/generateSalt";
import { hashedPassword } from "../helpers/hashPassword";
import { generateToken } from "../helpers/jwtConfig";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //   GET USER INPUT
    const {
      first_name,
      last_name,
      username,
      birth,
      gender,
      email,
      password,
      role,
    } = req.body;

    //   verification of input data
    if (
      !first_name ||
      !last_name ||
      !username ||
      !birth ||
      !gender ||
      !email ||
      !role ||
      !password
    ) {
      return res.status(400).json({
        status: 400,
        message: "Bad Request",
      });
    }

    //  Check if the user is already exist in database
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(409).json({
        status: 409,
        message: "User already exist.Please login",
      });
    }
    // Encrypt user password
    const salt = generatedSalt();
    const hashPassword = hashedPassword(password, salt);

    // console.log("hashPassword", hashPassword);
    // Create new user in database
    const newUser: IUser = new User({
      first_name,
      last_name,
      username,
      birth,
      gender,
      email,
      password: hashPassword,
      role,
    });

    await newUser.save();
    // create token
    const payload = {
      userId: newUser.id,
      email: newUser.email,
      username: newUser.username,
      role: newUser.role,
    };
    const token = generateToken(payload);

    res.status(200).json({
      success: true,
      data: { userId: newUser.id, email: newUser.email, token: token },
    });
    return next();
  } catch (error) {
    console.log(" register failed. exiting now...");
    console.error(error);
    res.status(200).json({ message: "register failed. exiting now..." });
    return next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const existing_user = await User.findOne({ email: email });
    console.log("Hello login ");
    res.status(200).json({ message: "Hello login successfully" });
  } catch (error) {
    console.log(" connection failed. exiting now...");
    console.error(error);
    res.status(500).json({ message: "connection failed. exiting now..." });
  }
};
