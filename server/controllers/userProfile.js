const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const defaultProfilePic = require("../util/defaultPic");
const StylistModel = require("../model/StylistModel");
const TeacherModel = require("../model/TeacherModel");

//! make so that only west-mec email work 
const getEmailAvailable = async (req, res) => {};

//! add teacher code to change student to teacher
const createUser = async (req, res) => {};


const postUserLogin = async (req, res) => {};
