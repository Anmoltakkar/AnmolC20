
var background0,backgroundImg,cat,mouse,catImg1,mouseImg1,catImg2,catImg3,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background0 = createSprite(500,400)
    background0.addImage(backgroundImg)
    mouse = createSprite(150,600)
    mouse.addAnimation("mouse",mouseImg1)
    mouse.scale = 0.17;
    cat = createSprite(850,620)
    cat.addAnimation("cat",catImg1)
    cat.scale = 0.2;

}

function draw() {
 
    background(255);
    //Write condition here to evalute if tom and jerry collide


    if(cat.x - mouse.x < (cat.width/2 - mouse.width/2)){
        cat.addAnimation("cat",catImg3)
        cat.velocityX = 0
        cat.x = 280
        mouse.addAnimation("mouse",mouseImg3)
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown("left_arrow")){
    mouse.addAnimation("mouse",mouseImg2)
    cat.velocityX = -4;
    cat.addAnimation("cat",catImg2)
  }
}

