const {sequelize, Sequelize} = require("../modules/sequelize-conn");

/* Model 작성 */
const Model = Sequelize.Model;
class AdminLogin extends Model {}
// Sample.init({테이블정보}, {옵션});
AdminLogin.init({
	adminID: {type: Sequelize.STRING, allowNull: false
	},
	adminPW: {
		type: Sequelize.STRING,
		allowNull: false
	},
	grade: {
		type: Sequelize.TINYINT,
		allowNull: false,
		defaultValue: 1
	},
 }, {
		sequelize,
		modelName: "admins"
});

// sync() method를 최초 한번 실행하여 테이블이 생성되면 주석처리하여 더 이상 쓸 필요가 없다.
// AdminLogin.sync({force: false});

module.exports = {AdminLogin};