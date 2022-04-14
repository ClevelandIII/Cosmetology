const router = require("express").Router();

const { createClient } = require("../controllers/clientProfile");

router.route("/clientCreator").post(createClient);

module.exports = router;
 