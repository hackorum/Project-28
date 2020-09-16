const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world, ground, tree, stone, boyimg, thrower, mango1, mango2, mango3, mango4, mango5, mango6;

function setup() {
  createCanvas(700, 400);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(350, 390, 700, 20, { isStatic: true });
  World.add(world, ground);

  tree = new Tree(400, 120);

  stone = new Stone(300, 200);

  boyimg = loadImage("boy.png");

  thrower = new Thrower(stone.body, { x: 177, y: 267 });

  mango1 = new Mango(430, 200);
  mango2 = new Mango(490, 160);
  mango3 = new Mango(460, 210);
  mango4 = new Mango(500, 220);
  mango5 = new Mango(550, 220);

  Engine.run(engine);
}
function draw() {
  background(135, 206, 250);
  Engine.update(engine);

  rectMode(CENTER);
  fill(200);
  rect(ground.position.x, ground.position.y, 700, 20);

  image(boyimg, 150, 230, 130, 130);

  isColliding(mango1, stone);
  isColliding(mango2, stone);
  isColliding(mango3, stone);
  isColliding(mango4, stone);
  isColliding(mango5, stone);

  tree.show();
  stone.show();
  thrower.show();

  mango1.show();
  mango2.show();
  mango3.show();
  mango4.show();
  mango5.show();

}

function mouseDragged() {
  Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  thrower.fly();
}

function isColliding(thing1, thing2) {
  var distance = dist(thing1.body.position.x, thing1.body.position.y, thing2.body.position.x, thing2.body.position.y);
  if (distance <= 30) {
    Body.setStatic(thing1.body, false);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    Body.setPosition(stone.body, { x: 170, y: 310 });
    thrower.attach(stone.body);
  }
}