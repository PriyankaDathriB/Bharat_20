var bg, sleep, astronaut,edges, brush;


function preload() {
  bg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
}

function setup() {
  createCanvas(800,400);
  
  edges = createEdgeSprites();
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale=0.1;

}

function draw() {
  background(bg);  

  text("UP Arrow = Brushing", 50,50);
  text("Down Arrow = Gymming", 50,60);

  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY=0;
    }

  drawSprites();
}