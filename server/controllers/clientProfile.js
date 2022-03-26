const ClientModel = require("../model/ClientModel");
const isEmail = require("validator/lib/isEmail");

const createUser = async (req, res) => {
  const {
    firstname,
    lastname,
    birthday,
    appointment,
    service,
    medical,
    address,
    city,
    state,
    zipcode,
    phone,
    email,
  } = req.body.user;

  if (!isEmail(email)) return res.status(401).send("Invalid");

  try {
    let user;
    user = await ClientModel.findOne({ email: email.toLowerCase() });
    if (user) return res.status(401).send("Email already used");

    user = new ClientModel({
      firstname,
      lastname,
      birthday,
      appointment,
      service,
      medical,
      address,
      city,
      state,
      zipcode,
      phone,
      email: email.toLowerCase(),
      username: username.toLowerCase(),

      profilePicURL: req.body.profilePicURL || defaultProfilePic,
    });

    user = await user.save();

    



    const payload = { userID: user._id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (err) {
    console.log(err);

    return res.status(500).send("Server error");
  }
};
module.exports = createUser;
