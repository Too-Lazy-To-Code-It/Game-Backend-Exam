import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

import { errorHandler, notFoundError } from "./middlewares/error-handler.js";

import employeeRoutes from "./routes/employee.js";
import projectRoutes from "./routes/project.js";
import taskRoutes from "./routes/task.js";


const app = express();
const port = process.env.PORT || 9090;
const databaseName = "examen4gamix2324sp";
const db_url = process.env.DB_URL || `mongodb://127.0.0.1:27017`;

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`${db_url}/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/image", express.static("public/images"));

app.use("/employees", employeeRoutes);
app.use("/projects",projectRoutes);
app.use("/tasks",taskRoutes);

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
