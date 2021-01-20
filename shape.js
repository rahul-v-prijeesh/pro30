class bi {
    constructor(x,y) {
      var options = {
          
     
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
   
    o()
     { var pos =this.body.position;

    
      rectMode(CENTER);
      
      rect(pos.x, pos.y, this.width, this.height);


  };}