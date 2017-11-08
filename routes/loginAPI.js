var express = require('express');
var loginAPI = express.Router();

// default login status
var isLogin=false;

// login verification page
loginAPI.get('/',function(req,res){
    //default login name
    var name='guest';
    isLogin=false;

    //if cookie exist
	if(req.signedCookies.firstName && req.signedCookies.lastName){
        name = req.signedCookies.firstName + ' ' + req.signedCookies.lastName;
        isLogin = true;
    }
     
    // template engine, views/index.ejs
     res.render('index', { title: 'Express with cookie login', member:name, logstatus:isLogin });
});

// submit firstname and lastname
loginAPI.post('/post', function(req, res) {
    if(req.body.firstName=="" || req.body.lastName=="")
    {
             return res.redirect('login.html');
    }else{
        // create signed cookie
        // set 10 mins to expire
    	res.cookie('firstName', req.body.firstName, { path: '/cookie', signed: true, maxAge:600000});     
        res.cookie('lastName', req.body.lastName, { path: '/cookie', signed: true, maxAge:600000 });
        // to login page
        return res.redirect('/cookie');
    }
});

// logout
loginAPI.get('/logout', function(req, res) {
    // clean cookie
    res.clearCookie('firstName',{path:'/cookie'});
	res.clearCookie('lastName',{path:'/cookie'});
	return res.redirect('/cookie');
});

module.exports = loginAPI;