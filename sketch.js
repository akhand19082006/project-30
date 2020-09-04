const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var base;
var ground,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,rope,box23,box24,box25,box26,box27,box28,box29,box30,box32,box33,box34;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

   // base = new Ground(600,300,200,20);
ground=new Ground(510,600,230,15);
ground2=new Ground(867,300,175,15);

box = new Box (420,575,30,40);
box1 = new Box (450,575,30,40);
box2 = new Box (480,575,30,40);
box3 = new Box (510,575,30,40);
box4 = new Box (540,575,30,40);
box5 = new Box (570,575,30,40);
box6= new Box (600,575,30,40)
box7 = new Box (435,535,30,40)
box8 = new Box (465,535,30,40)
box9 = new Box (495,535,30,40)
box10 = new Box (525,535,30,40)
box11 = new Box (555,535,30,40)
box12 = new Box (585,535,30,40)
box13 = new Box (450,495,30,40)
box14 = new Box (480,495,30,40)
box15 = new Box (510,495,30,40)
box16 = new Box (540,495,30,40)
box17 = new Box (570,495,30,40)
box18 = new Box (480,455,30,40)
box19 = new Box (510,455,30,40)
box20 = new Box (540,455,30,40)
box21 = new Box (510,415,30,40)
box22 = new Box3 (200,500,70,70)
rope=new SlingShot(box22.body,{x:200,y:500})
box23 = new Box (805,280,30,40)
box24 = new Box (835,280,30,40)

box25 = new Box (865,280,30,40)
box26 = new Box (895,280,30,40)
box27 = new Box (925,280,30,40)
box28 = new Box (835,240,30,40)

box29 = new Box (865,240,30,40)

box30 = new Box (895,240,30,40)

box31 = new Box (865,200,30,40)



}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
   // base.display();

  ground.display();
  ground2.display();
  box.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
rope.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
//Matter.Bodies.polygon(1100, 700, 6, 30, )
}

function mouseDragged(){
    Matter.Body.setPosition(box22.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if(keyCode === 32){
rope.attach(box22.body)}


}

