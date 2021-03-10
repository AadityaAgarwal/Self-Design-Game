var runner,runnerImg,runnerUpImg;
var ground;
var bgImg,bg;
function preload(){
bgImg=loadImage("bg1.jpg");
runnerImg=loadAnimation("-1.png","-2.png","-3.png","-4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png");
runnerUpImg=loadAnimation("upRunner.png");
}

function setup(){
 createCanvas(1200,400);
 
 bg=createSprite(100,190,1200,400);
 bg.addImage(bgImg);
 bg.x = bg.width /2;

 runner=createSprite(50,360,20,50);
 runner.addAnimation("running",runnerImg);
 runner.addAnimation("up",runnerUpImg);
 runner.scale=0.5;

 ground=createSprite(200,390,400,10);
 ground.visible=false; 

 //runner.setCollider("rectangle",0,0,50,runner.height);
 //runner.debug = true;
}

function draw(){
background(180);

if(keyCode===32&&runner.y>=300){
    runner.velocityY=-12;
    runner.changeAnimation("up",runnerUpImg);
}

bg.velocityX=-5;

if (bg.x < 0){
    bg.x = bg.width /2;
  }
runner.velocityY=runner.velocityY+0.8;

runner.collide(ground);
    drawSprites();
}