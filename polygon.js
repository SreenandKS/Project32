class Polygon {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, {options,isStatic:false});
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.img = loadImage("polygon.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.img,-10,10,this.radius,this.radius);
    //   rectMode(CENTER);
    //   strokeWeight(4);
    //   stroke("green");
    //   fill(255);
    //   rect(0, 0, this.width, this.height);
      pop();
    }
  };
  