const router = require("express").Router();

const {
  sortStylists,
  getAllUsers
} = require("../controllers/list");

router.route("/List").post(sortStylists).get(getAllUsers)

module.exports = router;