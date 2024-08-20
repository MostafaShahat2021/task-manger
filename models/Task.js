const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
  name: {
    type:String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 charactres"],
  },
  completed: {
    type: Boolean,
    default: false,
    
  },
});

module.exports = mongoose.model("Task", TaskSchema)
