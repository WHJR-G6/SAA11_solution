

var mario, mario_running, mario_collided;
var ground, invisibleGround, groundImage;

var bricksGroup, brickImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

function preload(){
  bg=loadImage("bg.png")
  mario_running =   loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");
  mario_collided = loadAnimation("collided.png");
  
  groundImage = loadImage("ground2.png");
  
  obstacleimage = loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png");
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
  
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
}

function setup() {
  createCanvas(600, 350);
  
  mario = createSprite(50,295,20,50);
  
  mario.addAnimation("running",mario_running);
  mario.addAnimation("collided", mario_collided);
  mario.scale = 2;
  mario.debug=true
  ground = createSprite(200,330,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(2);
  
  invisibleGround = createSprite(200,300,400,10);
  invisibleGround.visible = false;
  
  
  fill(0);
textSize(24);
textFont('Georgia');
  score = 0;
}

function draw() {
  //trex.debug = true;
  background(bg);
  text("Score: "+ score, 480,30);
    
    ground.velocityX = -(12);
  
    if(keyDown("space") && mario.y >= 250) {
      mario.velocityY = -12;
      jumpSound.play();
    }
  if(score>0 && score%10 === 0){
       checkPointSound.play() 
    }
    mario.velocityY = mario.velocityY + 0.5
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }

    mario.collide(invisibleGround);
    spawnbricks(); 
  
  drawSprites();
}

function spawnbricks() {
  //write code here to spawn the brick
  if (frameCount % 60 === 0) {
    var brick = createSprite(600,120,40,10);
    brick.debug=true
    brick.y = Math.round(random(150,180));
   //  brick.addImage(brickImage);
    brick.scale = 1;
    brick.velocityX = -3;
    
     //assign lifetime to the variable
    brick.lifetime = 200;
    
    //adjust the depth
    brick.depth = mario.depth;
    mario .depth = mario.depth + 1;
    
    
  }
  
}


