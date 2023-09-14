import express from "express";
import {
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

// PATCH /users
router.patch("/edit/:id", updateUser);

// DELETE /user
router.delete("/delete/:id", deleteUser);

/**Export router User */
export default router;
