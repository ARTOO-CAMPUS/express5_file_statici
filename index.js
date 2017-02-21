var express = require('express');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(3000, function () {
	console.log('Listening alla port 3000');
});