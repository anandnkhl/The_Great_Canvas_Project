var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var opn = require('opn');

app.get('/', (req, res) => res.sendFile( __dirname + '/index.html'));
//*****Fractal Tree*****
app.get('/fractalTree.js', (req, res) => res.sendFile( __dirname + '/FractalTree/fractalTree.js'));
app.get('/Fractal-Tree', (req, res) => res.sendFile( __dirname + '/FractalTree/fractalTree.html'));
//*****Animated Fractal Tree***** 
app.get('/animatedFractalTree.js', (req, res) => res.sendFile( __dirname + '/AnimatedFractalTree/animatedFractalTree.js'));
app.get('/Animated-Fractal-Tree', (req, res) => res.sendFile( __dirname + '/AnimatedFractalTree/animatedFractalTree.html'));
//*****Bounce***** 
app.get('/bounce.js', (req, res) => res.sendFile( __dirname + '/Bounce/bounce.js'));
app.get('/Bounce', (req, res) => res.sendFile( __dirname + '/Bounce/bounce.html'));
//*****Bounce Gravity***** 
app.get('/bounceGravity.js', (req, res) => res.sendFile( __dirname + '/BounceGravity/bounceGravity.js'));
app.get('/Bounce-Gravity', (req, res) => res.sendFile( __dirname + '/BounceGravity/bounceGravity.html'));

app.listen(8080, function(req, res) {
    console.log('Server running at http://127.0.0.1:8080/');
    opn('http://127.0.0.1:8080/'); //Auto launch default browser with our home page
});