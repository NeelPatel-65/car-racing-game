var database,backgroungimg;
var gameState = 0;
var playerCount;
var form,player,game,allPlayers;
var distance = 0;
var cars,car1,car2,car3,car4;
var track,car1_img,car2_img,car3_img,car4_img,ground;

function preload(){

car1_img = loadImage("./sprites/car1.png");
car2_img = loadImage("./sprites/car2.png");
car3_img = loadImage("./sprites/car3.png");
car4_img = loadImage("./sprites/car4.png");
track = loadImage("./sprites/track.jpg");
ground = loadImage("./sprites/ground 2.png");

}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);

   game = new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");

    if(playerCount === 4){
    game.update(1);

    }

    if (gameState === 1){
    
        clear();
        game.play();

    }
    
    if(gameState === 2){
      game.end();

    }
}

