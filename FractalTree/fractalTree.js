const canvas = document.getElementById("fractalTreeCanvas");
// canvas.setAttribute("style","background:#404040; width: 1200; height: 640");
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
  
  if(len < 5) {
    ctx.restore();
    return;
  }

  drawTree(0, -len, len*0.8, thickness*0.7, -25); //Left Branches
  drawTree(0, -len, len*0.8, thickness*0.7, 17);  //Right Branches
  ctx.restore();
}

drawTree(innerWidth/6, innerHeight - 4,100, 10, 20);  //Left Tree
drawTree(innerWidth/2, innerHeight - 4,50, 4, 0);     //Middle Tree
drawTree(5*innerWidth/6, innerHeight - 4,110, 15, -5); //Right Tree
