import express from "express";
import {
  deleteUser,
  findAll,
  findById,
  updateUser,
  uploadsImage,
} from "../controllers/userController";
import { authenticateJWT } from "../middleware/jwt.middleware";
import multer from "multer";
import { multerConfig } from "../helpers/StorageFile";

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

// Upload image /user
router.post("/uploadsImage", multerConfig, uploadsImage);

/**Export router User */
export default router;
