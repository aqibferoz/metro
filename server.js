// Libraries 
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User=require('./server/routes/user');

// database Connection
mongoose.connect('mongodb://localhost/metro');
var db = mongoose.connection;

// model imports
// var user = require('./models/user.js');



// Static Directory
app.use(express.static(__dirname+'/public'));
// json parsing
app.use(bodyParser.json());
app.use('/api/user',User);
app.listen(8000);
console.log('running at port 8000');