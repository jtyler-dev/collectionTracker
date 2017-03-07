// server.js

//base setup
var config = require('./serverConfig');
var express = require('express');

var app = express();
var mongoose = require('mongoose');

// set Promise provider to bluebird
//http://bluebirdjs.com/docs/api-reference.html
mongoose.Promise = require('bluebird');

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the port that the app runs on
var port = process.env.PORT || config.port || 8080;

// setup routes
var router = express.Router();



// will rework this later, for now just to test everthing is up and running
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
console.log('collection tracker server has started on ' + port);
