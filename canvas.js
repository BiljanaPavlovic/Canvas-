window.addEventListener('load', () => {
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");


canvas.height=window.innerHeight;
canvas.width = window.innerWidth;

//variables
let painting = false;

function statrPosition(){
    painting=true;
    draw(e);
}

function finishedPosition(){
    painting = false;
    ctx.beginPath();
}

function draw(e){
    if(!painting) return;
    ctx.linewidth = 100;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY)
}

//event listeners

canvas.addEventListener('mousedown', statrPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

});