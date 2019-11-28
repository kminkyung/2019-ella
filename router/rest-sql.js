const express = require("express");
const router = express.Router();

const {mysql, sqlExec} = require("../modules/mysql-conn"); // ES6의 새로운 문법



/* REST */
router.get("/", getData);
router.post("/sql", postData);
router.put("/sql", putData);
router.delete("/sql", deleteData);



/* Router Callback */                                                                   
async function getData(req, res, next) {
		let sql = "SELECT * FROM rest ORDER BY id DESC";
		let result = await sqlExec(sql);
		// res.json(result[0]);
		res.render("rest/restForm", {users: result[0]});
}


async function postData(req, res, next) {
		let username = req.body.username;
		let sql = "INSERT INTO rest SET username=?";
		let sqlVal = [username];
		let result = await sqlExec(sql, sqlVal);
		res.redirect("/rest-sql");
} 

async function putData(req, res, next) {
		let sql = "UPDATE rest SET username=? WHERE id=?";
		let sqlVal = [req.body.username, req.body.id];
		let result = await sqlExec(sql, sqlVal);
		res.redirect("/rest-sql");
}

async function deleteData(req, res, next) {
		let sql = "DELETE from rest WHERE id=?"
		let sqlVal = [req.body.id];
		let result = await sqlExec(sql, sqlVal);
		// console.log(result[0]);
		(result[0].affectedRows > 0) ? res.json({code: 200}) : res.json({code: 500});
} 


module.exports = router;