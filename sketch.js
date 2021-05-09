
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var Bob1,Bob2,Bob3,Bob4,Bob5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;
var bobDiameter;

function preload()
{
	
}

function setup() {
  createCanvas(1600, 1000);
  rectMode(CENTER);


	engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  roofObject=new roof(800,200,530,40);

  bobDiameter = 40;

  startBobPositionX=width/2;
  startBobPositionY=height/4+500;
  
  Bob1 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter*2);
  Bob2 = new bob(startBobPositionX-bobDiameter+40,startBobPositionY,bobDiameter*2);
  Bob3 = new bob(startBobPositionX-bobDiameter+120,startBobPositionY,bobDiameter*2);
  Bob4 = new bob(startBobPositionX-bobDiameter-120,startBobPositionY,bobDiameter*2);
  Bob5 = new bob(startBobPositionX-bobDiameter-200,startBobPositionY,bobDiameter*2);

 
  rope1=new rope(Bob1.body,roofObject.body,-bobDiameter*2, 0);
  rope2=new rope(Bob2.body,roofObject.body,-bobDiameter*2,0);
  rope3=new rope(Bob3.body,roofObject.body,-bobDiameter*2,0);
  rope4=new rope(Bob4.body,roofObject.body,-bobDiameter*2,0);
  rope5=new rope(Bob5.body,roofObject.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
   
  
 
  
  
  
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roofObject.display();
 
}



function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-50,y:-45});

  }
}


function drawLine(constraint)
{
Bob1BodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyOffset=constraint.pointB;

roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y
line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
