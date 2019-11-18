const express = require("express");
const router = express.Router();
const path = require("path");
const {AdminLogin} = require("../model/AdminLogin.js");
const util = require(path.join(__dirname, "../modules/util"));

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
	if(result.length == 1 && result[0].grade > 1) res.render("admin/main.pug",{leftNavs:[]});
	else res.send(util.alertAdmin());
}


module.exports = router;