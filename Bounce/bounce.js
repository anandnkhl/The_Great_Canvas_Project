const canvas = document.getElementById("bounceCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const noOfCircles = 30;
const radius = innerWidth/30;
const centerX = [];
const centerY = [];
const randomColor = [];
for(let i = 0; i < noOfCircles; i++){
    centerX.push( radius + Math.random()*(innerWidth - 2*radius) );
    centerY.push( radius + Math.random()*(innerHeight - 2*radius) );
    randomColor.push( '#'+ Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10)
                        + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10)
    );
}

const ctx = canvas.getContext("2d");
for(let i = 0; i < noOfCircles; i++){
    ctx.beginPath();
    ctx.arc(centerX[i], centerY[i], radius, 0, 2*Math.PI);
    ctx.strokeStyle = randomColor[i];
    ctx.stroke();
}
console.log(randomColor);