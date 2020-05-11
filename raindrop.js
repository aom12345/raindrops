class Raindrop {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x,y,2, height, options);
    if(this.body.position.y===420){
      this.body.position.y=random(-580,-180)
     }
    this.height = height;
    this.image = loadImage("raindrop.png");
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    console.log(this.body.position.y);
    //if(this.body.position.y > 1000){
      //this.body.position.y=-1000;
    //}
    imageMode(CENTER);
    image(this.image, 0, 0,10, this.height);
    pop();
  }
  };
  