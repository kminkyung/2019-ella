const mysql = require("mysql2/promise"); // async-await 쓰기 위해
const pool = mysql.createPool({
	host: "db.minkyung.gabia.io",
	port: 3306,
	user: "minkyung",
	// user: "ella",
	password: "mkm4167!!!",
	// password: "000000",
	database: "dbminkyung",
	// database: "ella",
	connectionLimit: 10,
	waitForConnections: true
});

/* async-await 적용 */
const sqlExec = async (sql, sqlVals) => {
	try {
		const connect = await pool.getConnection();
		const result = await connect.query(sql, sqlVals);
		connect.release();
		return result;
	}
	catch(err) {
		console.log(error);
		connect.release();
		// throw new Error(error)
	}
}



// async-await 하기 전
/* 
const sqlExec = (sql, sqlVals) => {
	pool.getConnection((error, connect) => {
		if(error) console.log(error);
		else {
			connect.query(sql, sqlVals, (error, result) => {
				connect.release();
				if(error) console.log(error);
				else console.log(result);
			})
		}
	});
}
 */

 module.exports = {
	 mysql,
	 sqlExec
 }