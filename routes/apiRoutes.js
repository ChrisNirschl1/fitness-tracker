const router = require("express").Router()
const work = require("../models/Work.js")



router.get("/workouts", (req, res) => {
    work.find({})
      .sort({ userCreated: 1 })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post('/api/workouts', (req, res) => {
    work.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.put('/api/workouts/:id', (req, res) => {
    work.findByIdAndUpdate(req.params.id, {$push: {exercises:req.body}} )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });


  module.exports= router