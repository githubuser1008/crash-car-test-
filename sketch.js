var car; 
var wall; 
var speed, weight;


function setup() {
  createCanvas(800,400);
wall =  createSprite(700,200, 50, 200);
wall.shapeColor=("white");

car = createSprite(100,200,35,30);
car.shapeColor=("cyan");

speed=random(60,90);
weight=random(400,1600);


}

function draw() {
  background(0,0,0);  

car.velocityX = speed;

if(wall.x-car.x<(car.width=wall.width)/2) {



var deformation=0.5 * weight * speed* speed/22505;
if(deformation>180) {

  car.shapeColor=("yellow");
car.velocityX=0;

} 
if(deformation<180 && deformation>100){

car.shapeColor=("red");
car.velocityX=0;

}

if(deformation<100){

  car.shapeColor=("green");
car.velocityX=0;

}

}




  drawSprites();
}