const router = require("express").Router();

const { createClient, addClient } = require("../controllers/clientProfile");

router.route("/clientCreator").post(createClient).put(addClient);


module.exports = router;
