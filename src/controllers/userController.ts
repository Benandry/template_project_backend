import { Request, Response } from "express";

// FIND ALL USER IN DATABASE
export const findAll = async (req: Request, res: Response) => {
  try {
    console.log("Get aall user uin database ");
  } catch (error) {
    console.error("Erreur lors de la création du post:", error);
    return res.status(500).json({ error });
  }
};

// FIND  USER BY ID  IN DATABASE
export const findById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log("The id de user to find ==> ", id);
    res.send("Hello  user ");
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
