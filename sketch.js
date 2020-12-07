var bullet,wall;
var speed,weight;
var deformation;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);

  speed = random(223,321);
  weight = random(30,52);
  

  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255); 
  
  if(wall.x-bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX = 0;
    deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation<10){
      wall.shapeColor =color(0,255,0);
    }
    else {
      wall.shapeColor =color(255,0,0);
    }
   
  }



  drawSprites();
}