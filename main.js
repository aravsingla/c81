canvas=document.getElementById("myCanvas")

canvas=
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.rect(250,210,40,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.rect(250,210,40,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.rect(250,210,40,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.rect(250,210,40,2*Math.PI);
ctx.stroke();