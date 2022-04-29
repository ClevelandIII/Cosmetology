const router = require("express").Router();

const { searchUsers } = require("../controllers/search");
const { auth } = require("../middleware/search");

router.route("/:searchText").get(auth, searchUsers);

module.exports = router;
