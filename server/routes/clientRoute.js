const router = require("express").Router();

const { createClient } = require("../controllers/clientProfile");

router.route("/clientProfile").post(createClient);

module.exports = router;
