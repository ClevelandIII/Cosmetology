const nodemailer = require("nodemailer");
require("dotenv").config();

const resetEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ray.hackett6@ethereal.email",
      pass: "rB7YJEv9rTZ5z2SSMb",
    },
  });
  
const options = {
  to:'nijdld@gmail.com',
  from: "MrGoogle@google.org",
    subject: "NodeMailer Test",
    text: "<h1>Hello World!</h1><p>Testing <em>Nodemailer</em></p>",
}
 transporter.sendMail(options,(err,info) => {
  if(err)return console.log(err);
  console.log(info)
})
};


module.exports = {resetEmail}