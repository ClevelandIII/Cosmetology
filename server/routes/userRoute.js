const router = require("express").Router();

const {
  // createUser,
  postLoginUser,
} = require("../controllers/clientProfile");

// router.route("/signup").post(createUser);
router.route("/login").post(postLoginUser);

module.exports = router;
