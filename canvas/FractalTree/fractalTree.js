const canvas = document.getElementById("fractalTreeCanvas");
canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

const ctx = canvas.getContext("2d");
function drawTree(startX, startY, len, thickness, angle) {
  ctx.beginPath();
  ctx.save();
  
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.strokeStyle = "#669900";
  ctx.lineWidth = thickness;
  ctx.stroke();
  
  if(len < 10) {
    ctx.restore();
    return;
  }
  
  drawTree(0, -len, len*0.8, thickness*0.7, -30); //Left Branches
  drawTree(0, -len, len*0.8, thickness*0.7, 25);  //Right Branches
  drawTree(0, -len, len*0.5, thickness*0.5, -5);  //Right Branches
  ctx.restore();
}

drawTree(innerWidth/6, innerHeight - 4,80, 10, 20);  //Left Tree
drawTree(5*innerWidth/7, innerHeight - 4,130, 15, -0); //Right Tree
