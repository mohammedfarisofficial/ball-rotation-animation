const screen = document.querySelector(".container");
const ball = document.querySelector(".ball-body");
const FPS = 50;

screen.style.height = window.innerHeight + "px";
screen.style.width = window.innerWidth + "px";

let xPosition = 10;
let yPosition = 10;
let xSpeed = 10;
let ySpeed = 10;
function update(){
    ball.style.left = xPosition + "px";
    ball.style.top = yPosition + "px";
}


setInterval(()=>{
    if(xPosition + ball.clientWidth  >= window.innerWidth || xPosition <= 0 ){
        xSpeed = -xSpeed;
    }
    if(yPosition + ball.clientHeight >= window.innerHeight || yPosition <= 0){
        ySpeed = -ySpeed;
    }
    xPosition += xSpeed;
    yPosition += ySpeed;
    update();
},1000/FPS);
