const express = require("express");
const router = express.Router();
const {sequelize, Sequelize} = require("../modules/sequelize-conn");

/* Model 작성 */
const Model = Sequelize.Model;
class Score extends Model {}
// Sample.init({테이블정보}, {옵션});
Score.init({
	stdname: {type: Sequelize.STRING, allowNull: false
	},
	kor: {
		type: Sequelize.TINYINT,
		allowNull: true
	},
	math: {
		type: Sequelize.TINYINT,
		allowNull: true
	},
	eng: {
		type: Sequelize.TINYINT,
		allowNull: true
	}
	}, {
		sequelize,
		modelName: "scores"
});
Score.sync({force: false});


/* REST */
router.get("/", getData);
router.post("/", postData);
router.put("/", putData);
router.delete("/", deleteData);



/* Router Callback */                                                                   
async function getData(req, res) {
	res.render("rest/seqForm");
}


async function postData(req, res) {

} 

async function putData(req, res) {

}

async function deleteData(req, res) {

} 


module.exports = router;