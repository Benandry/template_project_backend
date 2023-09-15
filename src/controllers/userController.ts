import { Request, Response, NextFunction } from "express";
import User from "../model/User";
import {
  userBodyFormatted,
  userFormatted,
  usersFormatted,
} from "../helpers/user";
import { IUser } from "../interfaces/IUser";
// FIND ALL USER IN DATABASE
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await User.find();
    const users = usersFormatted(data);
    next();
    return res.status(200).json({ data: users });
  } catch (error) {
    console.error("Erreur lors de la création du post:", error);
    return res.status(500).json({ error });
  }
};

// FIND  USER BY ID  IN DATABASE
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params.id;
    const data = await User.findById(_id).exec();
    if (data) {
      const user = userFormatted(data);
      // console.log("user", user);
      next();
      return res.status(200).json({ user });
    } else {
      return res
        .status(500)
        .json({ messages: "Aucun utilisateur trouvé avec cet ID." });
    }
  } catch (error) {
    console.error("Erreur lors de la rechercher du user:", error);
    return res.status(500).json({ error });
  }
};

// UPDATE  USER IN DATABASE
export const updateUser = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const user = userBodyFormatted(req.body);
    console.log("user", user);
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { ...user },
      { new: true }
    );
    if (updatedUser) {
      return res
        .status(200)
        .json({ success: true, message: "user updated successfully" });
    } else {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  } catch (error) {
    console.error("Erreur lors de la modification  du user:", error);
    return res.status(500).json({ error });
  }
};

// DELETE  USER IN DATABASE
export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    return res
      .status(500)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Erreur lors de la supprission  du user:", error);
    return res.status(500).json({ error });
  }
};
