
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImg;
var boyImg;
var fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7,fruit8;
var stoneObj,mangotree,groundObj;

function preload()
{
	boyImg = loadImage("Images/boy.png")
	bgImg = loadImage("Images/bg.png")
	treeImg = loadImage("Images/tree.png")
}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	fruit1 = new mango(1000,100,20)
	World.add(world,fruit1);

	fruit2 = new mango(900,70,20)
	World.add(world,fruit2);

	fruit3 = new mango(950,20,20)
	World.add(world,fruit3);

	fruit4 = new mango(1050,10,20)
	World.add(world,fruit4);

	fruit5 = new mango(900,150,20)
	World.add(world,fruit5);

	fruit6 = new mango(1100,110,20)
	World.add(world,fruit6);

	fruit7 = new mango(1075,225,20)
	World.add(world,fruit7);

	fruit8 = new mango(1150,175,20)
	World.add(world,fruit8);

	stoneObj = new stone(250,350,20)
	World.add(world,stoneObj);

	groundObj = new groundClass(600,height,1200,20);
	World.add(world,groundObj);

	slingthrow = new slingshot(stoneObj.body,{x:250,y:325});

	
	
	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(bgImg);

  push()

  slingthrow.display();

  drawSprites();

  imageMode(CENTER);
  image(treeImg,1000,250,400,600);
  image(boyImg,300,400,200,300);
 
  stoneObj.display();
  groundObj.display();

  fruit1.display();
  fruit2.display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  fruit6.display();
  fruit7.display();
  fruit8.display();

  detectCollision(stoneObj,fruit1)
  detectCollision(stoneObj,fruit2)
  detectCollision(stoneObj,fruit3)
  detectCollision(stoneObj,fruit4)
  detectCollision(stoneObj,fruit5)
  detectCollision(stoneObj,fruit6)
  detectCollision(stoneObj,fruit7)
  detectCollision(stoneObj,fruit8)
 
  textSize(25);
  fill(0);
  stroke(255);
  text("Plucking Mangoes - by Sai : ",450,50);
  text("Press space to have another turn ",600,500);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingthrow.fly();
}

function keyPressed() {
    if(keyCode === 32){
	   Matter.Body.setPosition(stoneObj.body,{x:250,y:350})
		slingthrow.attach(stoneObj.body);
    }
}

function detectCollision(lstone,lmango) {
	mangoBodyPostion = lmango.body.position
	stoneBodyPostion = lstone.body.position

	var distance = dist(stoneBodyPostion.x,stoneBodyPostion.y,mangoBodyPostion.x,mangoBodyPostion.y)

	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false)

	}
} 