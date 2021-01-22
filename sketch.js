
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob,roof  

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob = new Bob(200,600,3);
	roof= new Roof(400,300,400,10);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  bob.display();
  roof.display();


}



