/* Express 구동 */
const express = require("express");
const app = express();
app.listen(3300, () => {
	console.log("http://127.0.0.1:3300");
});

/* node_modules 참조 */
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

/* app 초기 셋팅 */
app.locals.pretty = true;
app.use("/", express.static(path.join(__dirname, "public")));
// app.use("/", express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/* method-override 설정 */
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

/* morgan 설정 */
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))


/* Router - ella */
const frontRouter = require("./router/front");
const adminRouter = require("./router/admin");
const apiRouter = require("./router/api");
app.use("/", frontRouter);
app.use("/admin", adminRouter);
app.use("/api", apiRouter);


/* Router - rest */
const sqlRouter = require("./router/rest-sql");
const ajaxRouter = require("./router/rest-ajax");
app.use("/rest-sql", sqlRouter);
app.use("/rest-ajax", ajaxRouter);
