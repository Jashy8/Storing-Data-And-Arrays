/*// types of data
// numbers
var num = 234;
console.log(num);

//string
var str = "Hello, I am a string";
console.log(str);

//boolean
var bool = true;
console.log(bool);

//undefined
var object;
console.log(object);

//reassigning undefined object to null
object = null;
console.log(object);

//arrays
// arrays storing same type of data
var arr1 = [655,988,55782,1009,6441];
console.log(arr1);
console.log(arr1[3]);

//arrays storing different data types
var arr2 = ["Hey", "Hello World", 654, false, null];
console.log(arr2);

//arrays storing list of arrays
var arr3 = [[544,987,987],["hey, there",987,true],[5436,0989,654,543]];
console.log(arr3);
//subindexing
console.log(arr3[2][1]);

arr3.push(7887);
console.log(arr3);

arr3.pop();
console.log(arr3);
*/
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

var gameState = "start";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    slingshot = new Slingshot(bird.body,{x: 200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  //  console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
  //  console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    
    slingshot.display();

    platform.display();
}

function mouseReleased(){
    slingshot.fly();
    gameState = "play";
}

function mouseDragged(){
    if(gameState !== "play"){
        Matter.Body.setPosition(bird.body,{x: mouseX,y: mouseY});
    }
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}