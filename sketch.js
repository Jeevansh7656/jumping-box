var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

   
    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite(300,590,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite(500,590,180,20);
    fixSprite3.shapeColor="blue";

    fixSprite4=createSprite(700,590,180,20);
    fixSprite4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10));
   
    if(movingSprite.x<0){
      music.stop()
        movingSprite.velocityX=4
    }else if(movingSprite.x>800){
      music.stop()
        movingSprite.velocityX=-3
    }
   
 if(fixSprite1.isTouching(movingSprite)&&movingSprite.bounceOff(fixSprite1)){
    music.play()
    movingSprite.shapeColor="red";
    
    
  }
  
  else if(fixSprite2.isTouching(movingSprite)&&movingSprite.bounceOff(fixSprite2)){
    music.play()
    movingSprite.shapeColor="green";
   
   
  }
    
  else if(fixSprite3.isTouching(movingSprite)&&movingSprite.bounceOff(fixSprite3)) {
    music.play()
    movingSprite.shapeColor="blue";
   
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
  }
  
  else if(fixSprite4.isTouching(movingSprite)&&movingSprite.bounceOff(fixSprite4)){
    music.play()
    movingSprite.shapeColor="yellow";
    
  }

  if (movingSprite.y<0){
    
    movingSprite.velocityY=3
  }

  
   
    drawSprites()
}