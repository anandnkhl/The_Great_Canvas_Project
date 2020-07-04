const canvas = document.getElementById("digitalRainCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const noOfStreams = 100;
const trailLen = 10;
const streams = [];

ctx.font = "1vw Arial";
ctx.textAlign = "center";

 
class Stream{
    constructor(x, y, trailLen){
        this.createStream = () => {
            for(let i = 0; i < trailLen; i++ ){
                ctx.fillStyle = "hsla(105, 100%, 50%, "+(1 - (i/trailLen))+")";
                ctx.fillText("0", x, y - (i*20) );
            }
        }

    }
}

for(let i = 0; i < noOfStreams; i++){
    const y = Math.random()*(window.innerHeight);
    const x = (i+0.5) * (window.innerWidth/noOfStreams);
    streams.push( new Stream(x,y,trailLen) );
}

for(let i = 0; i < noOfStreams; i++){
    streams[i].createStream();
}