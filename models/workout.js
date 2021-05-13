const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    excercises: [{
    type: {
        type: String,
        trim: true,
        required: "Please enter the type of Workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter the name of the Workout"
    },
    duration: {
        type: Number,
        required: "Enter the duration"
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    },
}],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;