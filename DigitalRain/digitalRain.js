const canvas = document.getElementById("digitalRainCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const noOfStreams = 150;
const trailLen = 10;
const streams = [];

ctx.font = "1vw Arial";
ctx.textAlign = "center";

 
class Stream{
    constructor(x, y, trailLen){
        const startY = y;
        this.createStream = () => {
            for(let i = 0; i < trailLen; i++ ){
                ctx.fillStyle = "hsla(105, 100%, 50%, "+(1 - (i/trailLen))+")";
                ctx.fillText("0", x, y - (i*20) );
            }
        }

        this.moveStream = () =>{
            if(y - (trailLen*20) > window.innerHeight){
                y = startY;
            }
            y+=10;
            this.createStream();
        }

    }
}

for(let i = 0; i < noOfStreams; i++){
    const y = Math.random()*(-window.innerHeight);
    const x = (i+0.5) * (window.innerWidth/noOfStreams);
    streams.push( new Stream(x,y,trailLen) );
}

const digitalRainFall = () => {
    requestAnimationFrame(digitalRainFall);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(let i = 0; i < noOfStreams; i++){
        streams[i].moveStream();
    }
}

digitalRainFall();