import express from "express";
import {
  deleteUser,
  findAll,
  findById,
  updateUser,
} from "../controllers/userController";
import { authenticateJWT } from "../middleware/jwt.middleware";

const router = express.Router();

/**Endpoints for user */

// GET /users
router.get("/", authenticateJWT, findAll);

// GET /users
router.get("/:id", authenticateJWT, findById);

// PATCH /users
router.patch("/edit/:id", authenticateJWT, updateUser);

// DELETE /user
router.delete("/delete/:id", authenticateJWT, deleteUser);

/**Export router User */
export default router;
