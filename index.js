var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var opn = require('opn');

app.get('/', (req, res) => res.sendFile( __dirname + '/index.html'));
app.get('/fractalTree.js', (req, res) => res.sendFile( __dirname + '/FractalTree/fractalTree.js'));
app.get('/Fractal-Tree', (req, res) => res.sendFile( __dirname + '/FractalTree/fractalTree.html'));

app.listen(8080, function(req, res) {
    console.log('Server running at http://127.0.0.1:8080/');
    opn('http://127.0.0.1:8080/'); //Auto launch default browser with our home page
});