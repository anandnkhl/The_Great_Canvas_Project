const canvas = document.getElementById("animatedFractalTreeCanvas");
canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

const initialX = innerWidth/2, initialY = innerHeight - 4;
const unitHeight = innerHeight/100, unitWidth = innerWidth/100;
let limit = 20*unitHeight;

const ctx = canvas.getContext("2d");
function drawAnimatedTree(startX, startY, len, thickness, angle) {
    if (len < limit){return}
    ctx.beginPath();
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.strokeStyle = "#669900";
    ctx.lineWidth = thickness;
    ctx.stroke();

    drawAnimatedTree(0, -len, len*0.8, thickness*0.7, 20)
    drawAnimatedTree(0, -len, len*0.8, thickness*0.7, -25)
    ctx.rotate(-angle * Math.PI/180);
    ctx.translate(-startX, -startY);
    
}

drawAnimatedTree(initialX, initialY, (20*unitHeight), 15, 0); 

const repeatAnimation = setInterval( growAnimation , 1000)

function growAnimation(){
    console.log("running");
    if (limit < 2*unitHeight){
        clearInterval(repeatAnimation); //stops repeat
    }
    else{
        limit /= 2;
        drawAnimatedTree(initialX, initialY, (20*unitHeight), 15, 0);
    }
}