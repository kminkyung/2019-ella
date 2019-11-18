const {sequelize, Sequelize} = require("../modules/sequelize-conn");

/* Model 작성 */
const Model = Sequelize.Model;
class AdminBanner extends Model {}
// Sample.init({테이블정보}, {옵션});
AdminBanner.init({
	src: {
		type: Sequelize.STRING, 
		allowNull: false
	},
	position: {
		type: Sequelize.ENUM("top", "bot"),
		defaultValue: "top"
	},
	title: {
		type: Sequelize.STRING,
		allowNull: true
	},
	desc: {
		type: Sequelize.STRING,
		allowNull: true
	},
	link: {
		type: Sequelize.STRING,
		allowNull: true
	},
 }, {
		sequelize,
		modelName: "banners"
});

// sync() method를 최초 한번 실행하여 테이블이 생성되면 주석처리하여 다시 사용하지 않는다.
// AdminBanner.sync({force: true});

module.exports = {AdminBanner};
