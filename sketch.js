
var canvas;

function preload(){

  eQImage = loadImage("images/EarthQuake.jpg")
  fireImage = loadImage("images/fire.png")
  hospitalImage = loadImage("images/hospital.jpg")
  policeImage = loadImage("images/police.png")
  womenPImage = loadImage("images/womenProtection.png")
}

	


function setup() {
	createCanvas(displayWidth,displayHeight);
  mainPage = new MainPage()
  
  earthQ= createSprite(displayWidth/7,200)

  earthQ.addImage("Eq",eQImage);
  earthQ.scale=0.05;

  police = createSprite(displayWidth/3,400)
  police.addImage("P",policeImage);
  police.scale=0.05;

  hospital = createSprite(displayWidth/3,600)
  hospital.addImage("H",hospitalImage);
  hospital.scale=0.05;

  fire = createSprite(displayWidth/3,700)
  fire.addImage("F",fireImage);
  fire.scale=0.05;

  womenpr = createSprite(displayWidth/3,100)
  womenpr.addImage("W",womenPImage)
  womenpr.scale=0.05;



 

}
function draw() { 
background("magenta");
textSize(15)
fill("green")
text("earthquake Helpline",displayWidth/7-200,200)

drawSprites();
}