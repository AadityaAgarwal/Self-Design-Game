var runner,runnerImg;
var ground;
var bgImg,bg;
function preload(){
bgImg=loadImage("bg1.jpg");
}

function setup(){
 createCanvas(1200,400);
 
 bg=createSprite(100,190,1200,400);
 bg.addImage(bgImg);
 
 bg.x = bg.width /2;
 runner=createSprite(50,360,20,50);
 
 ground=createSprite(200,390,400,10);
 ground.visible=false; 
}

function draw(){
background(180);

if(keyCode===32&&runner.y>=300){
    runner.velocityY=-12;
}

bg.velocityX=-5;

if (bg.x < 0){
    bg.x = bg.width /2;
  }
runner.velocityY=runner.velocityY+0.8;

runner.collide(ground);
    drawSprites();
}