const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
raindrops=[];
let abc;
function setup() {
  canavas=createCanvas(400,400)
  engine = Engine.create();
  world = engine.world;
  //abc=new Raindrop(200,200,random(0,400),random(0,100));
  for(let i = 0; i <150; i++) {
  raindrops[i]=new Raindrop(random(0,400),random(-980,-180),random(0,400),random(0,100));
}
}
function draw() {
  background(0);
  Engine.update(engine);
  //abc.display();
  for(let i = 0; i <100; i++) {
    if(raindrops[i].body.position.y > 1000){
      Matter.Body.setPosition(raindrops[i].body,{x:random(0,400),y:random(-980,10)})
   }
    raindrops[i].display();
 
  }
}