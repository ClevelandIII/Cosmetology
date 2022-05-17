const router = require("express").Router();
const forgotPassword = require("../controllers/fortgotPassword")
router.route("/ForgotPassword").get(forgotPassword)

module.exports = router;
