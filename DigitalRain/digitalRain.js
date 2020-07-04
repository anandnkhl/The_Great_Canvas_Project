const canvas = document.getElementById("digitalRainCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const noOfStreams = 1;
const noOfDrops = 20;
const streams = [];

ctx.font = "1vw Arial";
ctx.textAlign = "center";
for(let i = 0; i < noOfDrops; i++ ){
    ctx.fillStyle = "hsla(105, 100%, 50%, "+i/noOfDrops+")";
    ctx.fillText("0", canvas.width/2, (i*20) + canvas.height/2);  
}
 