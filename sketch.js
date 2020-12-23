var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0);  
  console.log(movingRect.x-fixedRect.x);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2)
  {
    fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  drawSprites();
}