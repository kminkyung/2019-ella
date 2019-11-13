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

(async () => {
	const result = await AdminLogin.sync({force: false});
	AdminLogin.create({
		adminID: "minkyung",
		adminPW: "1234",
		grade: 9
	})
});

module.exports = {AdminLogin};