const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//! this may not be needed
const TeacherSchema = new Schema({
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
  isTeacher: {
    type: String,
  },
  profilePicURL: { type: String },

  resetToken: { type: String },
    expireToken: { type: String },

  teacherContent: { type: String },

  stylist: { type: Schema.Types.ObjectId, ref: "Stylist" },
  firstPeriod: [{stylist: { type: Schema.Types.ObjectId, ref: "Stylist" } }],
  secondPeriod: [{stylist: { type: Schema.Types.ObjectId, ref: "Stylist" } }],
});

module.exports = mongoose.model("Teacher", TeacherSchema);