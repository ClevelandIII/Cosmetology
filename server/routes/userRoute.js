const router = require("express").Router();

const {
  createUser,
  postLoginUser,
  getAllUsers,
  addHours,
  deleteStylist
} = require("../controllers/userProfile");

router.route("/signup").post(createUser);
router.route("/login").post(postLoginUser);
router.route("/").get(getAllUsers);
router.route("/NormNavbar").get(getAllUsers);
router.route("/UserProfile").get(getAllUsers).patch(addHours);
router.route("/List").get(getAllUsers);
router.route("/:userId").delete(deleteStylist)

module.exports = router;
