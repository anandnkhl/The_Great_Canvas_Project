const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const opn = require('opn');
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
//*****Fractal Tree*****
app.get('/fractalTree.js', (req, res) => res.sendFile(__dirname + '/canvas/FractalTree/fractalTree.js'));
app.get('/canvas/Fractal-Tree', (req, res) => res.sendFile(__dirname + '/canvas/FractalTree/fractalTree.html'));
//*****Animated Fractal Tree***** 
app.get('/animatedFractalTree.js', (req, res) => res.sendFile(__dirname + '/canvas/AnimatedFractalTree/animatedFractalTree.js'));
app.get('/canvas/Animated-Fractal-Tree', (req, res) => res.sendFile(__dirname + '/canvas/AnimatedFractalTree/animatedFractalTree.html'));
//*****Bounce***** 
app.get('/bounce.js', (req, res) => res.sendFile(__dirname + '/canvas/Bounce/bounce.js'));
app.get('/canvas/Bounce', (req, res) => res.sendFile(__dirname + '/canvas/Bounce/bounce.html'));
//*****Bounce Gravity***** 
app.get('/bounceGravity.js', (req, res) => res.sendFile(__dirname + '/canvas/BounceGravity/bounceGravity.js'));
app.get('/canvas/Bounce-Gravity', (req, res) => res.sendFile(__dirname + '/canvas/BounceGravity/bounceGravity.html'));
//*****Digital Rain***** 
app.get('/digitalRain.js', (req, res) => res.sendFile(__dirname + '/canvas/DigitalRain/digitalRain.js'));
app.get('/canvas/Digital-Rain', (req, res) => res.sendFile(__dirname + '/canvas/DigitalRain/digitalRain.html'));

app.use(express.static(__dirname + '/assets'));

app.listen(PORT, function (req, res) {
    console.log('Server running');
});
