const defaultProfilePicURL = require("../util/defaultPic");
const ClientModel = require("../model/ClientModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");

const createClient = async (req, res) => {
  const { firstName, lastName, email, age, appointmentDate, serviceRequest } = req.body.client

  if (!isEmail(email)) return res.status(401).send("Invalid Email");
  if (age.length > 3)
    return res.status(401).send("Realistic Age");

  try {
    let client;
    client = await ClientModel.findOne({ email: email.toLowerCase() });
    if (client) return res.status(401).send("Email Already in Use");

    client = new ClientModel({
      firstName,
      lastName,
      email: email.toLowerCase(),
      age,
      appointmentDate,
      serviceRequest,
    });

    client = await client.save();

    // const payload = { stylistId: stylist._id };
    // jwt.sign(
    //   payload,
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1d" },
    //   (err, token) => {
    //     if (err) throw err;
    //     console.log(err);
    //     res.status(200).json(token);
    //   }
    // );
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

module.exports = {createClient}