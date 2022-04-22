// const ProfileModel = require("../model/ProfileModel");
const StylistModel = require("../model/StylistModel");
// const bcrypt = require("bcryptjs")

const getProfile = async (req, res) => {
  const { userId } = req.params;
  try {
    const stylist = await StylistModel.findOne({ userId });

    if (!stylist) {
      return res.status(404).send("No Stylist Found");
    }

    const profile = await StylistModel.findOne({
      userId: stylist.userId,
    }).populate("userId");

    return res.status(200).json({
      profile,
    });
  } catch (error) {
    // console.log(userId);
    console.log(error, userId);
    return res.status(500).send("Error @getProfile");
  }
};

module.exports = {
  getProfile,
};
