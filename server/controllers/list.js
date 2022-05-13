const StylistModel = require("../model/StylistModel");

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

const sortStylists = async (req, res) => {
  const { sort } = req.body;
  let outList;

  try {

    
    console.log(sort);

    if (sort == "Teacher") {
      outList = StylistModel.find({}).sort({ teacher: 1 });
    }
    if (sort == "Semester") {
      outList = StylistModel.find({}).sort({ session: 1 });
    }
    if (sort == "Year") {
      outList = StylistModel.find({}).sort({ studentYear: 1 });
    }
    if (sort == "Name") {
      outList = StylistModel.find({}).sort({ firstName: 1 });
    }
    res.status(200).json(outList);

    console.log(outList);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  sortStylists,
};
