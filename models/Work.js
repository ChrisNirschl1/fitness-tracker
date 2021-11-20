const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date
    },
  
    excercises: [
    {
     type:{
         type: String,
         trim: true,
         required: 'Need a type'

     }
    },
    {
        name:{
            type: String,
            trim: true,
            required: 'Need a name'
        }
       },
       {
        duration:{
            type: Number,
            required: 'Need a duration'
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

  const Workout = mongoose.model("WorkoutSchema", WorkoutSchema);
  module.exports = Workout;