var exp = require("express");
var app = new exp();
app.use(exp.static(__dirname+"/public"));
var bodyparser = require("body-parser");
app.use(bodyparser.json()); //deprecated
app.use(bodyparser.urlencoded({"extended":true})); //deprecated
var session = require("express-session");
app.use(session({"secret":"secret", "resave":"true", "saveUninitialized":"true"})); //deprecated
// . is neede for relative path to the current folder.
var routers = require("./routes/routes.js");
var hbars = require("jade");

// This folder is the one from the static files are served. 
// By default, the index.html is the index file
app.use(exp.static(__dirname+ "/public"));
var port = process.env.PORT||4000;
app.listen(port, listenFn);

// . is neede for relative path to the current folder.
var routers = require("./routes/routes.js");

function listenFn() {

	console.log("Server is running on port "+port);
}

// Setting the handlebars as the view engine
app.set('view engine', 'jade');


app.get("/", routers.loginPageHandler);
app.get("/toLandingPage", routers.landingPageHandler);
app.post("/toCityPage", routers.cityPageHandler);