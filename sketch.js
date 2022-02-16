var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage of the path
  pathImg = loadImage("path.png");
  //loadAnimation of the boy
 boyImg = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.PNG","Jake5.png")
}

function setup(){
  
  createCanvas(400,400);
 //create sprite for the path 
path = createSprite(200, 200, 400, 400)
 //add image for the path
path.addImage("path", pathImg);
 //Make the track a moving background by giving velocity Y.
path.scale=1.2;

//create a boy sprite
boy = createSprite(20, 200, 20,20)
//add animation for the boy
boy.scale=0.8;
boy.addAnimation("Jake", boyImg)

// create left Boundary
leftBoundary=createSprite(0,0,100,800);
//set visibility as false for left boundary
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
//set visibility as false for left boundary
rightBoundary.visible = false;
}

function draw() {
  background("white");
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)

  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
