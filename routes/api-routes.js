const router = require("express").Router();
const Workout = require("../models/workout");

// Works!!

router.get("/workouts", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

// router.post("/workouts")



module.exports = router;