const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var shape,p1,p2,p3
var v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15

function preload() {
    po= loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
  rectMode(CENTER)
    p1=new Ground(150,470,200,20)
   p2=new Ground (700,470,350,20)
   p3 =new Ground(1000,300,250,20)
    ground = new Ground(600,height,1200,20);
       shape1=new bi(150,250)
     World.add(world,shape1)
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(shape1.body,{x:200, y:370});
    v1=new b(620,440);
    v2=new b(660,440);
    v3=new b(700,440);
    v4=new b(740,440);
    v5=new b(780,440);
    v11=new b(580,440);
    v12=new b(820,440)
   
    v7=new b(660,380);
    v8=new b(700,380);
    v9=new b(740,380);
    v13=new b(620,380)
    v14=new b(780,380)
     
    v15=new b(660,320)
    v16=new b(700,320)
     v17=new b(740,320)
   
   
   v18=new b(680,280)   
   v19=new b(720,280)
   v10=new b(700,240);
   v20=new b(980,260)
   v21=new b(1020,260)
 v24=new b(1060,260)
   v25=new b(1020,180)
 v22=new b(1000+40,220)
    v23=new b(1000,220)
   
}

function draw(){
    background(255);
    Engine.update(engine);
  imageMode (CENTER)
    image(po,shape1.body.position.x,shape1.body.position.y,50,50)
 
    ground.display();
    p2.display()
    p1.display();
   v1.o()
   v2.o()
   v3.o()
   v4.o()
   v5.o()
   p3.display();
    v7.o()
   v8.o()
  v9.o()
   v10.o()
   v11.o()

   v12.o()
   v13.o()
   v14.o()
  v15.o()
   v16.o()
   v22.o()
   v17.o()
   v18.o()
   v19.o()
   v20.o()
    v21.o()
    v22.o()
    v23.o()
    v24.o()
    v25.o()
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(shape1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed()
{
    if(keyCode===32)
    {
        slingshot.attach(shape1.body)
    }
}