class mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,  
          restitution:0,
          friction:1,
      }
      this.x = x;
      this.y = y; 
      this.r = r;
      this.image = loadImage("Images/mango.png")
      if (x <=  1000){
        this.image = loadImage("Images/greenmango.png")  
      }  
      

      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      rotate(this.body.angle)
      imageMode(CENTER);
      image(this.image,0, 0, this.r*2,this.r*2);
      pop()
    }
  };
