const router = require("express").Router();

const { createClient } = require("../controllers/clientCreator");

router.route("/clientCreator").post(createClient);

module.exports = router;
