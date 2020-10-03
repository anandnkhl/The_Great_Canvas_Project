const canvas = document.getElementById("bounceGravityCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const noOfCircles = 10;
const radius = innerWidth/30;
const circles = [];

class Circle {
    constructor(x, y, color) {
        let speedY = 0;
        let gravity = 0.5; //increase this to make falling faster
        let elasticity = 0.9; // decrease this to lose more energy on hitting ground [0 to 1]

        this.moveCircle = () => {
            if (y + radius >= innerHeight && speedY >= -gravity) {
                speedY = -1 * speedY * elasticity;
            }
            else {
                speedY += gravity;
            }
            y += speedY;
            this.drawCircle();
        };
        this.drawCircle = () => {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.stroke();
        };
    }
}

for(let i = 0; i < noOfCircles; i++){
    let centerX = radius + Math.random()*(innerWidth - 2*radius);
    let centerY = Math.random()*(innerHeight/2) + radius;
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