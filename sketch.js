var astronaut;
function preload(){
  bg=loadAnimation("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym11.png","images/gym12.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  move=loadAnimation("images/move.png","images/move1.png");
  
  
}

function setup() {
  createCanvas(400, 400);
  astronaut=p5.play.createSprite( 50,100,50, 100)
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
  astronaut.visible=true;
}

function draw(){
  drawSprites();
}