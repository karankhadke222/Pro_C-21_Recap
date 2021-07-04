var canvas;
var music;
var rect1,rect2,rect3,rect4,movingRect;
var box;
var music

function preload(){
    music = loadSound("music.mp3");
}



function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rect1 = createSprite(0,550,360,30);
    rect1.shapeColor = "violet";
    rect2 = createSprite(290,550,200,30);
    rect2.shapeColor = "red";
    rect3 = createSprite(515,550,200,30);
    rect3.shapeColor = "blue";
    rect4 = createSprite(740,550,200,30);
    rect4.shapeColor = "pink";



    //create box sprite and give velocity
    box = createSprite(random(20,750),300,30,30);
    box.velocityX=4;
    box.velocityY=10;
    box.shapeColor = "darkBlue";


}

function draw() {
    background("black");
    edges= createEdgeSprites();
    box.bounceOff(edges)

    if(rect1.isTouching(box)&& box.bounceOff(rect1)){
        box.shapeColor = "violet";
        music.play();
    }
    if(rect2.isTouching(box)){
        box.shapeColor = "red";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(rect3.isTouching(box)&& box.bounceOff(rect3)){
        box.shapeColor = "blue";
        music.play();
    }
    if(rect4.isTouching(box)&& box.bounceOff(rect4)){
        box.shapeColor = "pink";
        music.play();
    }
    drawSprites();


    //add condition to check if box touching surface and make it box
}
