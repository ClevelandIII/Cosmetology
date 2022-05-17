const router = require("express").Router();

const {
  sortStylists,
  getAllUsers,
  deleteStylist,
} = require("../controllers/list");

router.route("/").get(getAllUsers).post(deleteStylist)
router.route("/sort").post(sortStylists);

module.exports = router;
