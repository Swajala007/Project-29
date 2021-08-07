const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var town1,town2;

var bridge;

var join,join1;

var stone,stone2,stone3,stone4,stone5,stone6;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  town1 = new Town(100,300,250,50);
  town2 = new Town(800,300,250,50);

  bridge = new Bridge(18,{x:80,y:260});


  
  Matter.Composite.add(bridge.body,town2)
 
  join1 = new Link(bridge,town2);
 
  stone = new Stone(300,100);
  stone2 = new Stone(500,100);
  stone3 = new Stone(500,50);
  stone4 = new Stone(350,50);
  stone5 = new Stone(500,50);
  stone6 = new Stone(500,30);
  

}

function draw() {
  background(51);
  Engine.update(engine);

  

  town1.display();
  town2.display();

  bridge.show();

  stone.display();
  
  stone2.display();
  
  stone3.display();
  
  stone4.display();
  
  stone5.display();

  stone6.display();




}
