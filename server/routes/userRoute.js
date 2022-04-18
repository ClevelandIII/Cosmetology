const router = require("express").Router();

const {
  createUser,
  postLoginUser,
  getAllUsers,
} = require("../controllers/userProfile");

router.route("/signup").post(createUser);
router.route("/login").post(postLoginUser);
router.route("/").get(getAllUsers);
router.route("/NormNavbar").get(getAllUsers);
router.route("/teacherProfile").get(getAllUsers)

module.exports = router;
