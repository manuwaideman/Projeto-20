
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bloco1;
var bloco2;
var bola;
var ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var ground_options ={
		isStatic:true
	}
	ground = Bodies.rectangle(400,650,width,50,ground_options);
	World.add(world,ground);

	var b1_options ={
		restitution: 0.5,
		friction: 0.02,
		frictionAir:0
	}
	bloco1 = Bodies.rectangle(110,50,10,10,b1_options);
	World.add(world,bloco1);

	var b2_options ={
		restitution: 0.7,
		friction: 0.01,
		frictionAir:0.1
	}
	bloco2 = Bodies.rectangle(350,50,10,10),b2_options;
	World.add(world,bloco2);

	var bola_options ={
		restitution: 0.01,
		friction: 1,
		frictionAir:0.3
	}
	bola = Bodies.circle(220,10,10,bola_options);
	World.add(world,bola);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  fill("pink");

  rect(ground.position.x,ground.position.y,width,50);
  rect(bloco1.position.x,bloco1.position.y,10,10);
  rect(bloco2.position.x,bloco2.position.y,10,10);
  ellipse(bola.position.x,bola.position.y,10);

  Engine.update(engine);
  
  drawSprites();
 
}



