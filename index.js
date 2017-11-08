var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// custom module
var routerCookie = require('./routes/loginAPI');
 
var app = express();
 
//set view engine
//the default path for express is ./views
app.set("view engine","ejs")

//change request data to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// sign for cookie
app.use('/cookie', cookieParser('1234567890'));

//static files: like .js, .json, .xml, html....
app.use(express.static(__dirname+'/public'));

// Create a router to handle routes for a set of loginAPI
app.use('/cookie', routerCookie);
 
app.listen(3000,function(){
    console.log('You are listening to post 3000');
});