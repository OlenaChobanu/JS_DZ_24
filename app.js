const canvas =  document.querySelector("#canvas");

canvas.width = 1800;
canvas.height = 900;

const ctx = canvas.getContext('2d');

document.querySelector('#clear').addEventListener('click', onClearCanvas);

function onClearCanvas(){
    ctx.clearRect(0,0,1800,900);
};

let strokeColor = 'black';
let fillColor = 'black';
let lineWidth = '1';

document.querySelector('.color-div').onclick = function (event){
    strokeColor = event.target.id;
}

document.querySelector('.color-div').oncontextmenu = function(event){
    fillColor = event.target.id;
}

document.querySelector('.line-width-div').onclick = function(event){
    lineWidth = event.target.id;
}

let isPressed = false;
let x = 0;
let y = 0;

canvas.onmousedown = function(event){
    canvas.onmousemove = function(event){
        x = event.offsetX;
        y = event.offsetY;
        renderCircle(x ,y);
    }
    canvas.onmouseup = function(){
        canvas.onmousemove = null;
    }
}

function renderCircle(x, y){
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y, lineWidth, lineWidth, 0, Math.PI * 2, false); 
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

document.querySelector("#eraser").onclick = function(){
    canvas.onmousedown = function(event){
        canvas.onmousemove = function(event){
            x = event.offsetX;
            y = event.offsetY;
            eraser(x ,y);
        }
        canvas.onmouseup = function(){
            canvas.onmousemove = null;
        }
    }
}

function eraser(x, y){
    ctx.clearRect(x, y, lineWidth, lineWidth);
}