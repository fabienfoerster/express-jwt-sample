var express = require('express');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressJWT({secret: "sample app"}).unless({path:['/','/auth']}))

app.get('/', function(req,res) {
    res.status(200).send('Hello World');
    return;
});


app.get('/secure', function(req,res) {
    res.status(200).send('secure endpoint');
    return;
});


app.get('/auth', function(req,res) {
    var token = jwt.sign({username: 'binou'}, "sample app")
    res.status(200).json(token);
    return;
});

var port = process.env.PORT || 8000

app.listen(port)

console.log("The magic is happening on port " + port)

module.exports = app;