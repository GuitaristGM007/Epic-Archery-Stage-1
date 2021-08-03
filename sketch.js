//declare constants for matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//create the engine
var engine;
//create the world
var world;
//create the canvas
var canvas;

//create the player
var player;
//create the computerPlayer
var computerPlayer;
//create the playerBase
var playerBase;
//create the computerBase
var computerBase;

//function to setup the game
function setup() {
//create the canvas of required size
canvas = createCanvas(windowWidth, windowHeight);
  
//initialising Engine
engine = Engine.create();
//add world into engine
world = engine.world;
	
//create the playerBase
playerBase = new PlayerBase(300, random(450, height-300), 180, 150);
//create the computerBase
computerBase = new ComputerBase(1065, random(450, height-300), 180, 150);

//create the player
player = new Player(285, playerBase.body.position.y - 153, 50, 180);
//create the computerPlayer
computerPlayer = new ComputerPlayer(1050, playerBase.body.position.y - 153, 50, 180);
}

//function to draw the objects
function draw() {
//set a suitable color of background
background("purple");

//required text
fill("#FFFF");
textAlign("center");
textSize(40);
text("EPIC ARCHERY", width / 2, 100);

//display the playerBase
playerBase.display();
//display the computerBase
computerBase.display();

//display the player
player.display();
//display the computerPlayer
computerPlayer.display();

//update the engine - final step
Engine.update(engine);
}
