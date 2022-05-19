const router = require("express").Router();

const {
  sortStylists,
  getAllUsers,
  deleteStylist,
} = require("../controllers/list");

router.route("/").get(getAllUsers).post(deleteStylist)
router.post("/sort", sortStylists)
// router.route("/sort").put(sortStylists);
 
module.exports = router;
