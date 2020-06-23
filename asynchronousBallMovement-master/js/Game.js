class Game{

constructor(){}

getState(){

    var gameStateRef = database.ref('gameStateCount');
    gameStateRef.on("value",function(data){

        gameState = data.val();
})
}

update (state){

database.ref('/').update({
    gameState:state
})
}

async start(){
if(gameState === 0){
player = new Player();
var playerCountref = await database.ref('playerCount').once("value");
if(playerCountref.exists()){

playerCount = playerCountref.val();
player.getCount();
}
form = new Form();
form.display();

}
car1 = createSprite(100,200);
car2 = createSprite(300,200);
car3 = createSprite(500,200);
car4 = createSprite(700,200);

car1.addImage("car1",car1_img);
car2.addImage("car2",car2_img);
car3.addImage("car3",car3_img);
car4.addImage("car4",car4_img);

}
play(){

form.hide();
Player.getPlayerInfo();

if(allPlayers !== undefined){
background(198,135,103);
image(track,0,-displayHeight*4,displaywidth,displayHeight*5);
var index = 0;
var x = 175;
var y;

for(var i in allPlayers){
index = index + 1;
x = x+200;
y = displayHeight-allPlayers[i].distance;
cars[index-1].x = x;
cars[index-1].y = y;

if(index === player.index){
stroke(10);
fill("red");
ellipse(x,y,60,60);

cars[index-1].shapeColor = "red";
camera.position.x = displayWidth/2;
camera.position.y = cars[index-1].y;
}
}
}
if(keyIsDown (UP_ARROW) && player.index !== null){

player.distance = player.distance+10;
player.update();
}

if(player.display>3860){

gameState = 2;
//player.rank = rank+1

}

drawSprites();

}
}