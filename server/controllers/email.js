const nodemailer = require("nodemailer");
require("dotenv").config();

const resetEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "everett.glover67@ethereal.email",
      pass: "mvzvdTxgphP4Q2xkpB",
    },
  });
};


let info = await transporter.sendMail({
  to: {}
})