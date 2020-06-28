const canvas = document.getElementById("bounceGravityCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const noOfCircles = 2;
const radius = innerWidth/30;
const circles = [];

function Circle (x, y, color){
    let maxHeight = y;
    let currentHeight = 0;
    let gravity = 0.5;
    let time = 0;
    this.drawCircle = (centerY) => {
        ctx.beginPath();
        ctx.arc(x, centerY, radius, 0, 2*Math.PI);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.stroke();
    }
    this.moveCircle = () => {
        if (currentHeight <= innerHeight - radius ){
            let speedY = 0.5*(gravity)*(time)*(time);
            currentHeight =  maxHeight + speedY;
            this.drawCircle(currentHeight);
        }else{
            let speedY = 0.5*(gravity)*(time)*(time);
            currentHeight =  maxHeight - speedY;
            this.drawCircle(currentHeight);
        }
        if(currentHeight >= innerHeight - radius || currentHeight <= maxHeight){
            time = 0;
            if(maxHeight < innerHeight - radius - 2){
                maxHeight += 10;
            }else{
                maxHeight = innerHeight - radius;
            }
        }
        time++; 
    }
}

for(let i = 0; i < noOfCircles; i++){
    let centerX = radius + Math.random()*(innerWidth - 2*radius);
    let centerY = Math.random()*(innerHeight/2);
    let randomColor = 'hsl('+ (Math.random()*360) + ', 100%, 50%)';
    
    circles.push( new Circle( centerX, centerY, randomColor))
}


const bounceAnimation = () => {
    requestAnimationFrame(bounceAnimation);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for( let i = 0; i < noOfCircles; i++){
        circles[i].moveCircle();
    }
}

bounceAnimation();