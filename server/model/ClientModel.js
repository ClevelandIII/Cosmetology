const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema =  new Schema({
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

  medicalAndAllergies:{type: Array},
  address:{type: String},
  city:{type:String},
  State:{type:String},
  Zip:{type: Number},
  Phone:{type: Number},

  hairCondition:{type: String ,enum: ["", ""],},
  hairClassification: {type: String ,enum: ["", ""],},
  scalpCondition:{type: String ,enum: ["", ""],},
  hairTexture: {type: String ,enum: ["", ""],},
  growthPatterns: {type: String ,enum: ["", ""],},
  hairDensity: {type: String ,enum: ["", ""],},
  hairPorosity: {type: String ,enum: ["", ""],},
  hairElasticity: {type: String ,enum: ["", ""],},
  hairLength: {type: String ,enum: ["", ""],},


  currentStylist:{type: String},
  latestVisit:{type: Date},

  pastStylist:{type: Array},
  pastVisit:{type: Array},
  
  dateCreated:{
    type: Date,
    default: Date.now()
  }

})

module.exports = mongoose.model("Client", ClientSchema);