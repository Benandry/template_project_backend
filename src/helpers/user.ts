import { IUser, IUserFormatted } from "../interfaces/IUser";
import User from "../model/User";

export const usersFormatted = (users: IUser[]): IUserFormatted[] => {
  const arrayUserFormatted: IUserFormatted[] = [];
  users.forEach((element) => {
    const userFormatted: IUserFormatted = {
      _id: element._id,
      first_name: element.first_name,
      last_name: element.last_name,
      username: element.username,
      birth: element.birth,
      gender: element.gender,
      email: element.email,
      role: element.role,
    };
    arrayUserFormatted.push(userFormatted);
  });

  return arrayUserFormatted;
};

export const userFormatted = (user: IUser): IUserFormatted => {
  const userFormatted: IUserFormatted = {
    _id: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
    birth: user.birth,
    gender: user.gender,
    email: user.email,
    role: user.role,
  };

  return userFormatted;
};

export const userBodyFormatted = (user: IUser) => {
  return {
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
    birth: user.birth,
    gender: user.gender,
    email: user.email,
    role: user.role,
  };
};
