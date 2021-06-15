var  dog, happyDog, database, foodS, foodStock;
var dogImage,dogImage1

function preload()
{
	dogImage1 = loadImage("images/dogImg1.png")
  dogImage = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(250,350,150,150);
  dog.addImage(dogImage); 
  dog.scale = 0.15
  
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

}


function draw() {  
  background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImage1);
}
  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}
function readStock(data){

  foodS = data.val()
}

function writeStock(x){

  if(x<0){
    x=0;
  }else{
    x=x-1;  
  
  }
  database.ref('/').update({
  Food:x
  })
}


