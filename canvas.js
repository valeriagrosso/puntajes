let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d");

// rectángulo grande
ctx.fillStyle = "yellow";
ctx.fillRect(150, 150, 100, 300);

// borde rectángulo y lineas intermedias
ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(150, 125);
ctx.lineTo(150, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(160, 125);
ctx.lineTo(160, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(170, 125);
ctx.lineTo(170, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(180, 125);
ctx.lineTo(180, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(190, 125);
ctx.lineTo(190, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 125);
ctx.lineTo(200, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(210, 125);
ctx.lineTo(210, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(220, 125);
ctx.lineTo(220, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(230, 125);
ctx.lineTo(230, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(240, 125);
ctx.lineTo(240, 450);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(250, 125);
ctx.lineTo(250, 450);
ctx.stroke();

// triángulo de la punta 
ctx.fillStyle = "beige";
ctx.beginPath();
ctx.moveTo(150, 450);
ctx.lineTo(200, 550);
ctx.lineTo(250, 450);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(150, 450);
ctx.lineTo(250, 450);
ctx.stroke();

// triángulo del grafito 
ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(175, 500);
ctx.lineTo(200, 550);
ctx.lineTo(225, 500);
ctx.stroke();
ctx.fill();

//borde de arriba
ctx.fillStyle = "black";
ctx.fillRect(150, 125, 100, 25);

//borrador 
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 125, 50, 0, Math.PI, true);
ctx.stroke();
ctx.fill();