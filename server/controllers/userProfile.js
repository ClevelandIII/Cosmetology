const defaultProfilePicURL = require("../util/defaultPic");
const StylistModel = require("../model/StylistModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");


// const TeacherModel = require("../model/TeacherModel");

//! make so that only west-mec email work
// const getEmailAvailable = async (req, res) => {};

//! add teacher code to change student to teacher
const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    hours,
    teacher,
  } = req.body.stylist;

  if (!isEmail(email)) return res.status(401).send()("Invalid Email");
  if (password.length < 6)
    return res.status(401).send("Password must be at least 6 characters long");

  try {
    let stylist;
    stylist = await StylistModel.findOne({ email: email.toLowerCase() });
    if (stylist) return res.status(401).send("Email Already in Use");

    stylist = new StylistModel({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password,
      profilePicURL: req.body.profilePicURL || defaultProfilePicURL,
      hours,
      teacher,
    });

    stylist.password = await bcrypt.hash(password, 10);
    stylist = await stylist.save();

    const payload = { stylistId: stylist._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        console.log(err);
        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

// const postUserLogin = async (req, res) => {};

module.exports = { createUser };
