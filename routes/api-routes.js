const router = require("express").Router();
const db = require("../models");

// Works!!

router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

router.post("/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/workouts/:id", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                excercises: body,
            },
        },
        {
            new: true,
        }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    })
});


module.exports = router;