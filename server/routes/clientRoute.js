const router = require("express").Router();

const { createClient, getAllClients } = require("../controllers/clientProfile");

router.route("/clientCreator").post(createClient);
router.route("/").get(getAllClients);

module.exports = router;
