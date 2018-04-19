//Express is the server that will be running node
var express = require('express');
//QueryString for parsing querystring - more on https://nodejs.org/api/querystring.html
var qs = require('querystring');
//url is used for parsing url and extract different parts out of it
//https://nodejs.org/api/url.html
var url = require('url');
//bodyParser runs as a middleware between node and json. 
//It helps in parsing json for post requests
var bodyParser = require('body-parser');
//Initializing the express server
var app = express();
//fs is for reading files from disk
var fs = require('fs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(3003, function() {
    console.log('Server started on port 3000. Access it with http://localhost:3000');
});

app.post('/login', function(req, res) {
    var userid = req.data.userid;
    var empPwd = req.data.userPasswd;
    var data = { "authtoken": "c04a98b9193a413fb0fc1e4f1d918a5dc04a98b9193a413fb0fc1e4f1d918a5d" };
    res.json(data);
});


app.post('/getuserinfo', function(req, res) {
    res.json({ "username": "jbaruah", "password": "secret", "rememberuserid": false, "touchidenabled": false, "devicetoken": "c04a98b9193a413fb0fc1e4f1d918a5d" });
});

app.post('/verifydevicetoken', function(req, res) {
    res.json({ "devicetoken": "c04a98b9193a413fb0fc1e4f1d918a5d" });
})