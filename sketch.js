var wall,thickness
var bullet,speed,weight



function setup() {
  createCanvas(1600,800);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50, 200, 40, 10);
  bullet.velocityX = speed;
  fill(80,80,80)
  wall=createSprite(1200,200,thickness,height/2)
}

function draw() {
  background(255,255,255);  
  //if(wall.x-bullet.x<(bullet.width+wall.width)/2){
   // bullet.velocityX=0;
   // var deformation=0.5*weight*speed*speed/22509;
   // if(deformation>180){
   //   bullet.shapeColor=color(255,0,0);
   //   textSize(200)
   //   text ("lethel",800,400)
   // }
   // if(deformation<180 && deformation>80){
   //   bullet.shapecolor=color(230,230,0);
    //  textSize(200)
    //  text("avrage",800,400)
   // }
   // if(deformation<80){
    //  bullet.shapeColor=color(0,255,0)
     // textSize(200)
    //  text("safe",800,400)
    //}
  //}
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=(255,0,0);
    }
    if(damage<10){wall.shapeColor=color(0,255,0)}
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
      bulletRightEdge=lbullet.x+lbullet.width;
      wallLeftEdge=lwall.x;
      if(bulletRightEdge>=wallLeftEdge)
      {
            return true
      }
            return  false;
}