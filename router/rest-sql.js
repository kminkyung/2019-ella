const express = require("express");
const router = express.Router();

const {mysql, sqlExec} = require("../modules/mysql-conn"); // ES6의 새로운 문법


/* GET */
router.get("/", getForm);

/* REST */
router.get("/sql", getData);
router.post("/sql", postData);
router.put("/sql", putData);
router.delete("/sql", deleteData);



/* Router Callback */                                                                   
function getForm(req, res) {
	res.render("rest/restForm");
}

function getData(req, res) {
	res.send("getData");
} 
function postData(req, res) {
	(async () => {
		let username = req.body.username;
		let sql = "INSERT INTO rest SET username=?";
		let sqlVal = [username];
		let result = await sqlExec(sql, sqlVal);
		res.json(result);
	})();
} 

function putData(req, res) {
	res.send("putData");
} 
function deleteData(req, res) {
	res.send("deleteData");
} 


module.exports = router;