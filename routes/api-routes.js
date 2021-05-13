const router = require("express").Router();
const db = require("../models");

router.post("/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

// router.post("/workouts")