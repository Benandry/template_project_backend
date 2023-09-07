import express from "express";
import {
  createUser,
  deleteUser,
  findAll,
  findById,
  updateUser,
} from "../controllers/userController";

const router = express.Router();

/**Endpoints for user */

// GET /users
router.get("/", findAll);

// GET /users
router.get("/:id", findById);

// POST /user
router.post("/new", createUser);

// PATCH /users
router.patch("/edit/:id", updateUser);

// DELETE /user
router.delete("/delete/:id", deleteUser);

/**Export router User */
export default router;
