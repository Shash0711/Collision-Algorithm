var fixedRect,MovingRect;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(400, 200, 50, 50);
  MovingRect = createSprite(600,300,80,30);

  fixedRect.shapeColor = "green";
  MovingRect.shapeColor = "green";

  fixedRect.debug = true;
  MovingRect.debug = true;
}


function draw() {
  background(0);  

  MovingRect.x = mouseX;
  MovingRect.y = mouseY;

  if(MovingRect.x-fixedRect.x < MovingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-MovingRect.x < MovingRect.width/2+fixedRect.width/2 && 
    MovingRect.y-fixedRect.y < MovingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-MovingRect.y < MovingRect.height/2+fixedRect.height/2) {

      fixedRect.shapeColor = "blue";
      MovingRect.shapeColor = "blue";

  }
  else{

    fixedRect.shapeColor = "green";
    MovingRect.shapeColor = "green";

  }
  drawSprites();
}