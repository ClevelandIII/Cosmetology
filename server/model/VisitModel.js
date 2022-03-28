const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema =  new Schema({
client:{},
Date:{},
stylist:{type: schema.Types.ObjectId, ref:"Stylist"},
style:{},
notes:{},
TimeItTook:{}



})
  
  module.exports = mongoose.model("Visit", VisitSchema);