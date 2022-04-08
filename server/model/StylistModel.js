const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StylistSchema = new Schema(
  {
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

    hours: {
      type: Number,
      default: 0,
    },

    teacherCode: {
      type: Number,
      // required: true,
    },

    className: {
      type: String,
      // required: true,
    },

    session: {
      type: Number,
      // required: true,
    },

    teacher: { type: String },

    pastClients: { type: Array },

    resetToken: { type: String },
    expireToken: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stylist", StylistSchema);
