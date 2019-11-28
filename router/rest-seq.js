const express = require("express");
const router = express.Router();
const {Score} = require("../model/Score.js");


/* REST */
router.get("/", getData);
router.post("/", postData);
router.put("/", putData);
router.delete("/", deleteData);



/* Router Callback */                                                                   
async function getData(req, res, next) {
	let result = await Score.findAll({
		order: [['id', 'DESC']]
	});
	res.render("rest/seqForm", {datas: result});
}


async function postData(req, res, next) {
	let result = await Score.create({
		stdname: req.body.stdname,
		kor: req.body.kor,
		math: req.body.math,
		eng: req.body.eng
	});
	res.redirect("/rest-seq");
} 

async function putData(req, res, next) {
	let result = await Score.update({
		stdname: req.body.stdname,
		kor: req.body.kor,
		math: req.body.math,
		eng: req.body.eng
	}, {
		where: {
			id: req.body.id
		}
	});
	res.redirect("/rest-seq");
}

async function deleteData(req, res, next) {
	let result = await Score.destroy({
		where: {
			id: req.body.id
		}
	});
	res.json(result);
} 


module.exports = router;