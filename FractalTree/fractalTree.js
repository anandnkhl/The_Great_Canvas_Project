const canvas = document.getElementById("fractalTreeCanvas");
// canvas.setAttribute("style","background:#404040; width: 1200; height: 640");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

const ctx = canvas.getContext("2d");
    
function draw(startX, startY, len, angle) {
  ctx.beginPath();
  ctx.save();
  
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.strokeStyle = "#009900";
  ctx.stroke();
  
  if(len < 5) {
    ctx.restore();
    return;
  }
  
      draw(0, -len, len*0.8, -15);
      draw(0, -len, len*0.8, 15);
  
  
  ctx.restore();
}

draw(120,120,10,0);