const canvas = document.getElementById("bounceGravityCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const noOfCircles = 30;
const radius = innerWidth/30;
const circles = [];

function Circle (x, y, color){
    let maxHeight = y;
    let time = 0;
    this.drawCircle = () => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.stroke();
    }
    this.moveCircle = () => {
        if (y + radius >= innerHeight || y - radius <= 0){
            
        }else{
            let speedY = maxHeight + 0.05*time*time;
            y = speedY;
        }
        
        time++;
        this.drawCircle();
    }
}

for(let i = 0; i < noOfCircles; i++){
    let centerX = radius + Math.random()*(innerWidth - 2*radius);
    let centerY = radius + Math.random()*(innerHeight - 100 - 2*radius);
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