const { getProfile } = require("../controllers/profile");

const router = require("express").Router();

router.route("/profile").get(getProfile);

module.exports = router;
