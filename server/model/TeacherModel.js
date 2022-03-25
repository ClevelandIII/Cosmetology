const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//! this may not be needed
const TeacherSchema =  new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  profilePicURL: { type: String },

  firstPeriod:{type: Array},
  secondPeriod:{type: Array}





})

module.exports = mongoose.model("Teacher", TeacherSchema);