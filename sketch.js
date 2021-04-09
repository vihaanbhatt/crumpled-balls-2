
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin=loadImage("dustbin.jpg")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	box1 = new Box(500,675,90,20)
	box2 = new Box(450,645,20,90)
	box3 = new Box(550,645,20,90)
	ground = new Ground(400,690,800,10)
	paper = new Paper(100,650,50)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background("white");
  image(dustbin,450,510,200,200)
  
  
 box1.display()
 box2.display()
 box3.display()
 ground.display()
 paper.display()

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-450})
	}
}



