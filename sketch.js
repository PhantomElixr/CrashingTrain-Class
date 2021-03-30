const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;

var trainSound, crossingSound;

function preload(){
    backgroundImage = loadImage('images/bg.jpg');
    trainSound = loadSound('sounds/sound_train.mp3');
    crossingSound = loadSound('sounds/sound_train_crossing.mp3');;
}

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground();

    car1 = new Coach(50,340);
    car2 = new Coach(150,340);
    car3 = new Coach(250,340);
    car4 = new Coach(350,340);

    rock = new Rock();

    sling1 = new Slingshot(car1.body, car2.body);
    sling2 = new Slingshot(car2.body, car3.body);
    sling3 = new Slingshot(car3.body, car4.body);
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);

    car1.display();
    car2.display();
    car3.display();
    car4.display();

    rock.display();

    sling1.display();
    sling2.display();
    sling3.display();

    if(rock.body.speed > 5){
        textSize(50);
        text('Train Crashed', 255, 50);
        crossingSound.play(false);
    }
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(car1.body,car1.body.position,{x: 100,y: 2});
        trainSound.play(false);
	}
}

