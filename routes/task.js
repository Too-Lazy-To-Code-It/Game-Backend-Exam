import express from "express";

import {addOnce, putOnce} from "../controllers/task.js";
const router = express.Router();

router.
route("/:employeeId/:projectId")
.post(addOnce);

router.route("/:id")
.put(putOnce);

export default router;