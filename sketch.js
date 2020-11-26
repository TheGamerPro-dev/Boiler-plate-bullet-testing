var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {

  speed = (random(223,321));
  weight = (random(30,52))
  thickness = (random(22,83))

  createCanvas(1600,400);
  wall = createSprite(800, 200, thickness, height/2);
  bullet = createSprite(200,200,32,9);

  bullet.velocityX = speed;
  bullet.shapeColor = color (255)
}

function draw() {
  background(0);  
 if (hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  damage = .55 * weight * speed * speed/(thickness * thickness * thickness);
  if (damage>10){
    wall.shapeColor = color(255,0,0);
    text ("This material is rejected and cannot be used in a wall", 100, 200)
  }
  if (damage<10){
    wall.shapeColor = color(0,255,0);
    text ("This is a good material for a wall.", 100, 200)
  }
 }
  drawSprites();
}
function hasCollided(object1, object2){
  bulletRightEdge = object1.x + object1.width;
  wallLeftEdge = object2.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}