const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
//crie o mecanismo
  //Adicione mundo ao mecanismo
  

  
   var ball_options = {
    restitution:0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crie o solo
//adicione ao mundo

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  retangulo = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,retangulo);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(retangulo.position.x,retangulo.position.y,20);
  //escreva uma função de retângulo para exibir o solo.
 


  
  
}

