const {clientProfile} = require("../controllers/clientProfile")


const router = require('express').Router()


router.route("/client").get(clientProfile)


module.exports = router;