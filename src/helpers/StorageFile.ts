import { Request } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req: Request, file, callback) => {
    callback(null, "images_uploads/users");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const file_name = Date.now() + name;
    callback(null, file_name);
  },
});

export const multerConfig = multer({ storage: storage }).single("image");
