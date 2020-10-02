const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  
    ground = new Ground(600,390,1200,20);
    box1  = new Box(840,360,60,60);
   
    box2  = new Box(960,360,60,60);
    log1 = new Log(900,290,200,PI/2);
    box3 = new Box(840,270,60,60);
    box4= new Box(960,270,60,60);
    pig1= new Pig(900,330) ;
    pig2= new Pig(900,270) ;
    log2 = new Log(900,230,200,PI/2);
    box5= new Box(900,180,60,60);
    log3 = new Log(870,180,100,PI/4);
    log4 = new Log(950,180,100,-PI/6);
    bird1 = new Bird(100,100) ;

   console.log(log1);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();

    box1.display();
    box2.display();
    log1.display();
    box3.display();
    box4.display();
    pig1.display() ;
    pig2.display() ;
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();

    push();
    fill("white");
    text(mouseX+","+mouseY,mouseX,mouseY);
    pop();
   
}