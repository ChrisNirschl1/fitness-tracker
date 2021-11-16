const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date
    },
  
    excercise: [
    {
     type:{
         type: String
     }
    },
    {
        name:{
            type: String
        }
       },
       {
        durationn:{
            type: Number
        }
       },
       {
        weight:{
            type: Number
        }
       },
       {
        reps:{
            type: Number
        }
       },
       {
        sets:{
            type: Number
        }
       },
],
completed: {
    type: Boolean
}
  });

  const Workout = mongoose.model("Workout", WorkoutSchema);
  module.exports = Workout