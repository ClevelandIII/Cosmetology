const router = require("express").Router();

const { createClient, getAllClients, addVisit, sortClients } = require("../controllers/clientProfile");

router.route("/clientCreator").post(createClient).patch(addVisit)
router.route("/").get(getAllClients);
router.route("/UserProfile").patch(addVisit)
router.route("/List").post(sortClients)

module.exports = router;
