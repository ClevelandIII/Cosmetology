const router = require("express").Router();

const {
  createUser,
  postLoginUser,
  getAllUsers
} = require("../controllers/userProfile");

router.route("/signup").post(createUser);
router.route("/login").post(postLoginUser);
router.route("/").get(getAllUsers)


module.exports = router;
