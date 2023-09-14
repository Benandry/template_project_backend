import { Request, Response, NextFunction } from "express";
import User from "../model/User";
import { userFormatted, usersFormatted } from "../helpers/user";
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
      return res.status(200).json({ data: user });
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
    const id = req.params.id;
    res.send(`The id de user to update  ${id}`);
  } catch (error) {
    console.error("Erreur lors de la modification  du user:", error);
    return res.status(500).json({ error });
  }
};

// DELETE  USER IN DATABASE
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log("The id de user to delete ==> ", id);
    res.send(`The id de user to delete  ${id}`);
  } catch (error) {
    console.error("Erreur lors de la supprission  du user:", error);
    return res.status(500).json({ error });
  }
};
