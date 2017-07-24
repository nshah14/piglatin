var express = require('express');
var morgan = require('morgan'); // logger
var assert = require('assert');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('sync-request');

var fs = require('fs'), path = require('path');
var app = express();


app.use(cors());
app.use('/public', express.static(__dirname + '/public'));
app.use('/public/scripts', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
var url = "/app/rest/"



app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function (req, res) {
    console.log('*****Running on port number  ::  3000 *****');
   
});
