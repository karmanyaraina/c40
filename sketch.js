var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1i,car2i,car3i,car4i;
var form, player, game;
var track, ground;
var cars, car1, car2, car3, car4;

function preload(){
  ground=loadImage("sprites/ground.png");
  track=loadImage("sprites/track.jpg");
  car1i=loadImage("sprites/car1.png");
  car2i=loadImage("sprites/car2.png");
  car3i=loadImage("sprites/car3.png");
  car4i=loadImage("sprites/car4.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
