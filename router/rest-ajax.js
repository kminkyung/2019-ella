const express = require("express");
const router = express.Router();

const {mysql, sqlExec} = require("../modules/mysql-conn"); // ES6의 새로운 문법



/* REST */
router.get("/", getData);
router.post("/", postData);
router.put("/", putData);
router.delete("/", deleteData);



/* Router Callback */                                                                   
async function getData(req, res) {
		let sql = "SELECT * FROM rest ORDER BY id DESC";
		let result = await sqlExec(sql);
		// res.json(result[0]);
		res.json(result[0]);
}


async function postData(req, res) {
		let username = req.body.username;
		let sql = "INSERT INTO rest SET username=?";
		let sqlVal = [username];
		let result = await sqlExec(sql, sqlVal);
		(result[0].affectedRows > 0) ? res.json({code: 200}) : res.json({code: 500});
} 

async function putData(req, res) {
		let sql = "UPDATE rest SET username=? WHERE id=?";
		let sqlVal = [req.body.username, req.body.id];
		let result = await sqlExec(sql, sqlVal);
		(result[0].affectedRows > 0) ? res.json({code: 200}) : res.json({code: 500});
}

async function deleteData(req, res) {
		let sql = "DELETE from rest WHERE id=?"
		let sqlVal = [req.body.id];
		let result = await sqlExec(sql, sqlVal);
		// console.log(result[0]);
		(result[0].affectedRows > 0) ? res.json({code: 200}) : res.json({code: 500});
} 


module.exports = router;