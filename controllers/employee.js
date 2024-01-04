import { validationResult } from "express-validator";

import employee from "../models/employee.js";


  export function addOnce(req, res) {
    if (!validationResult(req).isEmpty()) {
      res.status(400).json({ errors: validationResult(req).array() });
    } else {
      employee.create({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        image: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
      })
        .then((newemployee) => {
          res.status(201).json({
            _id: newemployee._id,
        
          });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    }
  }

  export function getAll(req, res) {
    employee.find({})
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

