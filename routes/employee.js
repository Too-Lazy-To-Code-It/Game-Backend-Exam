import express from "express";
import { body } from "express-validator";

import multer from "../middlewares/multer-config.js";

import { addOnce,getAll } from "../controllers/Employee.js";
const router = express.Router();

router
  .route("/")
  .post(
    multer("image", 512 * 1024),
    body("fullname").isLength({ min: 5 }),
    body("email").isEmail(),
    body("phone").isNumeric().isLength({ min: 8, max: 8 }),
    addOnce,
  )
  .get(getAll);
export default router;
