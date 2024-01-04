import Task from "../models/task.js";
import employee from "../models/employee.js";
import project from "../models/project.js";
import task from "../models/task.js";

export function addOnce(req, res) {
  employee.findById(req.params.employeeId)
    .then((employee) => {
      project.findById(req.params.projectId)
        .then((project) => {
          Task.create({
            employeeId: req.params.employeeId,
            projectId: req.params.projectId,
            status: false,
          })
            .then((newTask) => {
              res.status(201).json(newTask);
            }).catch((err) => {
              res.status(500).json({ error: err });
            });
        });
    });
}

export function putOnce(req, res) {
  var newGame=task.findById(req.params.id)
  newGame.status=true;
  Task.findByIdAndUpdate(req.params.id, newGame)
    .then((doc1) => {
      Task.findById(req.params.id)
        .then((doc2) => {
          res.status(201).json(doc2);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}