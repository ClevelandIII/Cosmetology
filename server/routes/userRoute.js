const router = require("express").Router();

const {
  createUser,
  postLoginUser,
  getAllUsers,
  addHours,
  sortStylists,
  deleteStylist
} = require("../controllers/userProfile");

router.route("/signup").post(createUser);
router.route("/login").post(postLoginUser);
router.route("/").get(getAllUsers).post(sortStylists)
router.route("/NormNavbar").get(getAllUsers);
router.route("/UserProfile").get(getAllUsers).patch(addHours);
router.route("/List").get(getAllUsers).post(sortStylists)
router.route("/:userId").delete(deleteStylist)

module.exports = router;
 