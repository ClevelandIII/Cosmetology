const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: { type: [] }
});

module.exports = mongoose.model("Profile", ProfileSchema);
