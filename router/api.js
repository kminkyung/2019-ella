const express = require("express");
const router = express.Router();
const {AdminBanner} = require("../model/AdminBanner");

/* Get */
router.get("/ban/main", getBanMain);

/* Post */

/* Router Cb */
async function getBanMain(req, res) {
	let result = await AdminBanner.findAll({
		order: [["id", "asc"]],
		where: {position: "top"}
	});
	res.json(result);
}

module.exports = router;