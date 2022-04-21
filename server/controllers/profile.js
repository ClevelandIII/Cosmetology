const ProfileModel = require("../model/ProfileModel");
const StylistModel = require("../model/StylistModel");
// const bcrypt = require("bcryptjs")


const getProfile = async (req, res) => {
  try{
    const {userId} = req.params

    const stylist = await StylistModel.findOne({ userId })
    if(!stylist){
      return res.status(404).send("No Stylist Found")
    }

    const profile = await ProfileModel.findOne({stylist: stylist._id}).populate("stylist")


    return profile
  } catch (error){
    console.log(error);
    return res.status(500).send("Error @getProfile")
  }
}

module.exports = {
  getProfile,
};
