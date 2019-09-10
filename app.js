const express = require("express");
const app = express();
app.listen(3300, () => {
	console.log("http://127.0.0.1:3300");
});
app.use("/", express.static("./public"));
