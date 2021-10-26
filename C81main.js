Canvas = document.getElementById("MyCanvas");
ctx = Canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(450, 210, 50, 0 ,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4
ctx.arc(250, 210, 50, 0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4
ctx.arc(350, 210, 50, 0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4
ctx.arc(400, 250, 50, 0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 4
ctx.arc(300, 250, 50, 0,2*Math.PI);
ctx.stroke();

