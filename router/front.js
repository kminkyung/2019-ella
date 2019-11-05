const express = require("express");
const router = express.Router();

/* Get */
router.get("/login", getLogin);
router.get("/search", getSearch);


/* Post */

/* Router Callback */
function getLogin(req, res) {
	res.send("Login");
} 
function getSearch(req, res) {
	res.send("Search");
} 
module.exports = router;