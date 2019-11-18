const express = require("express");
const router = express.Router();
const path = require("path");
const {AdminBanner} = require("../model/AdminBanner.js");
const util = require(path.join(__dirname, "../modules/util"));


/* REST */
router.get("/:type", getData);


/* Router Callback */                                                   
async function getData(req, res) {
	let type = req.params.type;
	let vals = {
		leftNavs: [
			{
				link: "/admin/banner/top",
				title: "상단 배너 관리"
			},{
				link: "/admin/banner/bottom",
				title: "하단 배너 관리"
			}
		],
	}
	switch(type) {
		case "top":
			res.render("admin/bannerTop", vals);
			break;
		case "bottom":
			res.render("admin/bannerBottom", vals);
			break;
		default:
			next();
			break;
	}
}


module.exports = router;