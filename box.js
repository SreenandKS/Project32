class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, {options,isStatic:false});
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      
      World.add(world, this.body);
    }
    score(){
      if(this.Visiblity<0&&this.Visiblity>-105){
        score++;
      }
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3){
        rectMode(CENTER);
        // strokeWeight(4);
        // stroke("green");
        fill(237);
        rect(pos.x, pos.y, this.width, this.height);
      }
      else{
  
        push();
        World.remove(world,this.body)
       
       
        this.Visiblity = this.Visiblity-5;
        tint(255,this.Visiblity);
        translate(pos.x, pos.y);
        rotate(angle);
      
        pop();
      }

      
     
    }
  };
  