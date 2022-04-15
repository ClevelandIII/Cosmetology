const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  appointmentDate: {
    type: Date,
    required: true,
  },
  serviceRequest: {
    type: String,
  },
  medicalIssues: { type: String },

  email: {
    type: String,
    required: true,
  },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  
  Zip: { type: Number },
  Phone: { type: Number },

  hairColor: { type: String },
  hairCondition: {
    type: String,
    enum: [
      "Dry",
      "Normal",
      "Greasy",
      "Chemical Damage",
      "Environmental Damage",
      "Heat Damage",
      "Product Build-up",
    ],
  },
  hairClassification: {
    type: String,
    enum: ["Straight", "Wavy", "Curly", "Very Curly"],
  },
  scalpCondition: {
    type: String,
    enum: ["Dry Oily", "Dandruff Normal", "Product Build-up"],
  },
  hairTexture: {
    type: String,
    enum: ["Very Fine", "Fine", "Medium", "Coarse"],
  },
  growthPatterns: {
    type: String,
    enum: ["Nape Whorls", "Widows Peak", "Cowlick", "Double Crown"],
  },
  hairDensity: {
    type: String,
    enum: ["Very High", "High", "Medium", "Low", "Mix"],
  },
  hairPorosity: { type: String, enum: ["Low", "Average", "High"] },
  hairElasticity: { type: String, enum: ["Good", "Average", "Poor", "Mix"] },
  hairLength: { type: String, enum: ["Short", "Medium", "Long"] },

  // currentStylist: { type: String },
  // latestVisit: { type: Date },

  // pastStylist: { type: Schema.Types.ObjectId, ref: "Stylist" },
  // pastVisit: { type: Schema.Types.ObjectId, ref: "Visit" },

  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Client", ClientSchema);
