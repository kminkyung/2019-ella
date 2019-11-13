const express = require("express");
const router = express.Router();
const {AdminLogin} = require("../model/AdminLogin.js");


/* REST */
router.post("/", postData);



/* Router Callback */                                                                   
async function postData(req, res) {
	let result = await AdminLogin.findAll({
		where: {
			adminID: req.body.adminID,
			adminPW: req.body.adminPW
		}
	});
	res.json(result);
}


module.exports = router;