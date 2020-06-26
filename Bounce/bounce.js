const canvas = document.getElementById("bounceCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const noOfCircles = 30;
const radius = innerWidth/30;
const circles = [];

function Circle (x, y, color, speedX, speedY){
    this.drawCircle = () => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.stroke();
    }
    this.moveCircle = () => {
        if (x + radius >= innerWidth || x - radius <= 0){
            speedX = -speedX
        }
        if (y + radius >= innerHeight || y - radius <= 0){
            speedY= -speedY
        }
        x += speedX;
        y += speedY;

        this.drawCircle();
    }
}

for(let i = 0; i < noOfCircles; i++){
    let centerX = radius + Math.random()*(innerWidth - 2*radius);
    let centerY = radius + Math.random()*(innerHeight - 2*radius);
    let randomColor = '#'+ Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10)
        + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10);
    let dx = (Math.random() - 0.5)* 20, dy = (Math.random() - 0.5) * 20;
    
    circles.push( new Circle( centerX, centerY, randomColor, dx, dy))
}


const bounceAnimation = () => {
    requestAnimationFrame(bounceAnimation);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for( let i = 0; i < noOfCircles; i++){
        circles[i].moveCircle();
    }
}

bounceAnimation();