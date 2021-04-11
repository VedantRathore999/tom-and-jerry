var cat
var catimage
function preload() {
    //load the images here
catimage=loadImage("catstand.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(850,760,20,20)
   
   cat.addImage("cat",catimage)
   
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
