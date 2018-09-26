var express = require("express");
var app = express();
var bodyParser = require("body-parser");
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
var port = process.env.APP_PORT || 3000;

app.listen(port);


var router = require('./router.js');
app.use('/api', router);
