const canvas = document.getElementById("digitalRainCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const noOfStreams = 150;
const trailLen = 10;
const streams = [];
const fontSize = window.innerWidth/100;
const fontStyle = String(fontSize)+"px Arial";

ctx.font = fontStyle;
ctx.textAlign = "center";

 
class Stream{
    constructor(x, y, trailLen, startLetter){
        const startY = y;
        this.createStream = () => {
            for(let i = 0; i < trailLen; i++ ){
                ctx.fillStyle = "hsla(105, 100%, 50%, "+(1 - (i/trailLen))+")";
                ctx.fillText(Math.floor(Math.random()*10), x, y - (i*fontSize) );
            }
            ctx.fillStyle = "hsla(105, 100%, 80%, 1)";
            ctx.fillText(startLetter, x, y+fontSize );
        }

        this.moveStream = () =>{
            if(y - (trailLen*fontSize) > window.innerHeight){
                y = startY;
            }
            y+=3;
            this.createStream();
        }

    }
}

for(let i = 0; i < noOfStreams; i++){
    const y = Math.random()*(-window.innerHeight - 200);
    const x = (i+0.5) * (window.innerWidth/noOfStreams);
    const startLetter = Math.floor(Math.random()*10);
    streams.push( new Stream(x,y,trailLen,startLetter) );
}

const digitalRainFall = () => {
    requestAnimationFrame(digitalRainFall);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(let i = 0; i < noOfStreams; i++){
        streams[i].moveStream();
    }
}

digitalRainFall();