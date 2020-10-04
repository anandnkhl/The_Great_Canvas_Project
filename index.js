const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const opn = require('opn');
const PORT = process.env.PORT || 8080;

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
//*****Digital Rain*****
app.get('/digitalRain.js', (req, res) => res.sendFile( __dirname + '/DigitalRain/digitalRain.js'));
app.get('/Digital-Rain', (req, res) => res.sendFile( __dirname + '/DigitalRain/digitalRain.html'));
//*****Mouse Move*****
app.get('/mouseMove.js', (req, res) => res.sendFile( __dirname + '/MouseMove/mouseMove.js'));
app.get('/Mouse-Move', (req, res) => res.sendFile( __dirname + '/MouseMove/mouseMove.html'));

app.listen(PORT, function(req, res) {
    console.log('Server running');
});
