const router = require("express").Router();

const {
  createUser,
  postLoginUser,
  getAllUsers,
  addHours,
  sortStylists,
} = require("../controllers/userProfile");

router.route("/signup").post(createUser);
router.route("/login").post(postLoginUser);
router.route("/").get(getAllUsers);
router.route("/NormNavbar").get(getAllUsers);
router.route("/UserProfile").get(getAllUsers).patch(addHours);
router.route("/sort").post(sortStylists);

module.exports = router;
