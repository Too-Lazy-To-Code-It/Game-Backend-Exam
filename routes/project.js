import express from "express";
import { body } from "express-validator";

import { addOnce, getAll } from "../controllers/project.js";
const router = express.Router();
router
  .route("/")
  .post(
    body("name").isLength({ min: 5 }),
    body("description").isLength({ min: 20, max: 1000 }),
    body("nbrTaskMax").isNumeric(),
    addOnce,
  )
  .get(getAll);

export default router;
