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

module.exports = {Score};