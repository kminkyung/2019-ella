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
	if(result.length == 1 && result[0].grade > 1) {
		res.render("admin/main.pug", result[0]);
	}
	else()
	res.json(result);
}


module.exports = router;