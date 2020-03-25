  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  var engine, world;
  var holder,ball,ground;
  var bgimg;

  function preload(){
    bgimg = loadImage("sprites/3.jpg")
  }

  function setup() {
    createCanvas(400,540);
    engine = Engine.create();
    world = engine.world;

    var ground_options={
      isStatic : true
    }


    var holder_options={
      isStatic: true
    }

  ground = Bodies.rectangle(200,530,400,10,ground_options);
  World.add(world,ground);

  holder = Bodies.rectangle(190,215,200,5,holder_options);
  World.add(world,holder);

  var ball_options = {
    restitution : 1.0,
    density : 1.0
  }

  ball  = Bodies.circle(220,200,40,ball_options);
  World.add(world,ball);

  var options = {
    bodyA : ball,
    bodyB : holder,
    stiffness: 0.004,
    length : 100
  }

  var string = Constraint.create(options);
  World.add(world,string);
  fill("White");

 }


  function draw() {
  background(bgimg); 
  Engine.update(engine);

  fill ("red");
  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,70,10);

  fill(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);

  strokeWeight(6);
  stroke("black");
  line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

  stroke(255,0,255);
  strokeWeight(1);
  text("Press Space Bar to control the pendulum with ur mouse like magic",20,480);
  text("Press Enter to make the pendulum return to its position" ,50,510);

  if(keyCode===32){
  ball.position.y = mouseY;
  ball.position.x = mouseX;
  }

  else if (keyCode === ENTER){
  ball.position.y = 350;
  }

}