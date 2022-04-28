const defaultProfilePicURL = require("../util/defaultPic");
const StylistModel = require("../model/StylistModel");
const axios = require("axios");
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
    className,
    session,
    studentYear,
    teacherCode,
    isTeacher,
  } = req.body;

  if (!isEmail(email)) return res.status(401).send("Invalid Email");
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
      className,
      teacher,
      teacherCode,
      session,
      studentYear,
      isTeacher,
      profilePicURL: req.body.profilePicURL || defaultProfilePicURL,
      hours,
      // userId,
    });

    stylist.password = await bcrypt.hash(password, 10);
    stylist = await stylist.save();
    // stylist.stylistId = stylist._id

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

const postLoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!isEmail(email)) return res.status(401).send("Invalid Email");
  if (password.legnth < 6)
    return res.status(401).send("Password must be at least 6 characters long");

  try {
    const stylist = await StylistModel.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!stylist) return res.status(401).send("Invalid Credentials");
    const isPassword = await bcrypt.compare(password, stylist.password);

    if (!isPassword) return res.status(401).send("Invalid Credentials");

    const payload = { stylistId: stylist._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

const getAllUsers = async (req, res) => {
  try {
    let stylists;
    stylists = await StylistModel.find();
    return res.status(200).json(stylists);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getAllStylists");
  }
};

const addHours = async (req, res) => {
  const {hour, user} = req.body
  console.log(`hours: ${hour}`);
  console.log(`userID: ${user}`)
  try {
    const getStylists = async () => {
      try {
        let stylist = await StylistModel.findOne({userId: user});

        stylist.hours.push([hour]);
        console.log(`stylist`, stylist);
        await stylist.save();
        // console.log(`stylist2`, stylist);
        return res.status(200).send("All Good");
      } catch (error) {
        console.log(error);
      }
    };
    getStylists();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, postLoginUser, getAllUsers, addHours };
