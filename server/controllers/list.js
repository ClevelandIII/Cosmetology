const StylistModel = require("../model/StylistModel");

const getAllUsers = async (req, res) => {
  try {
    let stylists;
    stylists = await StylistModel.find();
    return res.status(200).json(stylists);
  } catch (error) {
    console.log(`Error at getAllUsers ${error}`);
    return res.status(500).send("Server Error @ getAllStylists");
  }
};

const deleteStylist = async (req, res) => {
  const { userIds } = req.body;
  try {
    console.log(`This is: ${userIds}`);

    if (userIds === undefined) {
      console.log("No User ID. Error because undefined.");
      return res.status(404).send("No UserId");
    } else if (userIds === "") {
      console.log("No User ID. Error because empty string.");
      return res.status(404).send("No UserId");
    }

    const look = await StylistModel.findOne({ userId: userIds });
    console.log(`This was your stylist: ${look}`);
    const stylists = await StylistModel.findOneAndDelete({ userId: userIds });

    if (!stylists) {
      return res.status(404).send("No Stylist Found");
    }

    return res.status(200).json({
      stylists,
    });
  } catch (error) {
    console.log(`Failed userIds: ${userIds}`);
    return res.status(500).send("Error @deleteStylist");
  }
};

const sortStylists = async (req, res) => {
  const { sortType } = req.body;
  let stylists;

  try {
    console.log(`Sort ${sortType}`);

    if (sortType === "") {
      console.log("Sort is undefined.");
    }

    if (sortType == "Teacher") {
      stylists = StylistModel.find({}).sort({ teacher: 1 });
    }
    if (sortType == "Semester") {
      stylists = StylistModel.find({}).sort({ session: 1 });
    }
    if (sortType == "Year") {
      stylists = StylistModel.find({}).sort({ studentYear: 1 });
    }
    if (sortType == "Name") {
      stylists = StylistModel.find({}).sort({ firstName: 1 });
    }
    res.status(200).json({ stylists });

    console.log(`stylists: ${stylists}`);
  } catch (error) {
    console.log(`Error at sortStylists ${error}`);
  }
};

module.exports = {
  getAllUsers,
  sortStylists,
  deleteStylist,
};
