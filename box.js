class b {
    constructor(x,y) {
      var options = {
          
     
      }
      this.body = Bodies.rectangle(x,y,40,60,options);
      this.width = 40;
      this.height = 60;
      this.visibility=255
      World.add(world, this.body);
    }
   
    o()
     { var pos =this.body.position;
if(this.body.speed<3){
    
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
}
else{
  World.remove(world,this.body)
push ()

this.visibility=this.visibility-100

 tint (255,this.visibility)
 //rect(pos.x, pos.y, this.width, this.height);
 pop ()
}
  };}