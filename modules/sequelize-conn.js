// npm i sequelize sequelize-cli mysql mysql2
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
	host: "db.minkyung.gabia.io",
	username: "minkyung",
	port: 3306,
	// user: "ella",
	password: "mkm4167!!!",
	// password: "000000",
	database: "dbminkyung",
	// database: "ella",
	dialect: "mysql",
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

/* Promise 구문 */
/* sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  }); */

(async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	}
	catch(err) {
		console.error('Unable to connect to the database:', err);
	}
})();


module.exports = {sequelize, Sequelize};