
const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof1,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	roof1= new roof (500,100,800,20);

bob3= new bob (500,350);

bob2=new bob(560,350);

bob4=new bob(440,350);

bob5=new bob(620,350);

bob1=new bob(380,350);

rope1=new rope(bob3.body,roof1.body,0,0);

rope2=new rope(bob4.body,roof1.body,-60,0);

rope3=new rope(bob1.body,roof1.body,-120,0);

rope4=new rope(bob2.body,roof1.body,60,0);

rope5=new rope(bob5.body,roof1.body,120,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
roof1.display();

bob3.display();
bob2.display();
bob4.display();
bob5.display();
bob1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

}



