import { IUser } from "../interfaces/IUser";
import User from "../model/User";

export const isUserValid = (userData: IUser): boolean => {
  const {
    first_name,
    last_name,
    username,
    birth,
    gender,
    email,
    password,
    role,
  } = userData;
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
    return false;
  } else {
    return true;
  }
};

export const checkingUser = async (userData: IUser) => {
  const { email } = userData;
  const usert_to_check = await User.findOne({ email });
  return usert_to_check;
};
