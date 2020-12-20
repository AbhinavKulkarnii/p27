
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roofObject = new Roof(width/2,height/4,width/7,20);

	//Create the Bodies Here.
	bobDia = 40;
	bobPositionX = width/2;
	bobPositionY = height/4+500;

	bob1 = new Bob(bobPositionX-bobDia*2,bobPositionY,bobDia);
	bob2 = new Bob(bobPositionX-bobDia,bobPositionY,bobDia);
	bob3 = new Bob(bobPositionX,bobPositionY,bobDia);
	bob4 = new Bob(bobPositionX+bobDia,bobPositionY,bobDia);
	bob5 = new Bob(bobPositionX+bobDia*2,bobPositionY,bobDia);

	rope1 = new Rope(bob1.body,roofObject.body,-bobDia*2,0);
	rope2 = new Rope(bob2.body,roofObject.body,-bobDia*1,0);
	rope3 = new Rope(bob3.body,roofObject.body,-bobDia*0,0);
	rope4 = new Rope(bob4.body,roofObject.body,bobDia*1,0);
	rope5 = new Rope(bob5.body,roofObject.body,bobDia*2,0);


	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{
			x: -50,
			y: -45
		})
	}
}


function draw() {
  rectMode(CENTER);
  
  background(230);
  roofObject.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
}



