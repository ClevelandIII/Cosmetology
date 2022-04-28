const { getProfile } = require("../controllers/profile");

const router = require("express").Router();

router.route("/:userId").get(getProfile);

module.exports = router;
 