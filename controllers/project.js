import Project from "../models/project.js";
import { validationResult } from "express-validator";

export function getAll(req, res) {
  Project.find({})
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        list.push(docs[i]);
      }
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json({ errors: validationResult(req).array() });
  } else {
    Project.create({
      name: req.body.name,
      description: req.body.description,
      nbrTaskMax: req.body.nbrTaskMax,
    })
      .then((newProject) => {
        res.status(201).json({
            _id: newProject._id,
        
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}
