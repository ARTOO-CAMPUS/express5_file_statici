var express = require('express');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

//ASSEGNO ALLA ROTTA /immagini IL PERCORSO SUL SERVER CHE PUNTA ALLA CARTELLA images
app.use('/immagini', express.static(path.join(__dirname, '..', 'client', 'images')));

app.listen(3000, function () {
	console.log('localhost:3000');
});