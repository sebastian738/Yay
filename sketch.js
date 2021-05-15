var canvas;
var music;
var redSurf
var blueSurf
var greenSurf
var orangeSurf
var Box1

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces
redSurf = createSprite(95,580,150,20)
redSurf.shapeColor= "red"
blueSurf = createSprite(270,580,150,20)
blueSurf.shapeColor= "blue"
greenSurf = createSprite(445,580,150,20)
greenSurf.shapeColor ="green"
orangeSurf = createSprite(620,580,150,20)
orangeSurf.shapeColor ="orange"


    //create box sprite and give velocity
    Box1 =createSprite(random(95,750),200,20)
    Box1.velocityY = 3
    Box1.shapeColor ="white"


}

function draw() {
    background("black")
    console.log("seb")
    //create edgeSprite
    createEdgeSprites()
    



    //add condition to check if box touching surface and make it box
    if(redSurf.isTouching(Box1)&& Box1.bounceOff(redSurf)){

        Box1.shapeColor = "red"
        music.play()
        
         }
         else{
           Box1 .shapeColor = "white"
            
          }
          if(blueSurf.isTouching(Box1)&& Box1.bounceOff(blueSurf)){

            Box1.shapeColor = "blue"
            music.play()
            
             }
             else{
               Box1 .shapeColor = "white"
                
              }
              if(greenSurf.isTouching(Box1)&& Box1.bounceOff(greenSurf)){

                Box1.shapeColor = "green"
                music.play()
                
                 }
                 else{
                   Box1 .shapeColor = "white"
                    
                  }
                  if(orangeSurf.isTouching(Box1)&& Box1.bounceOff(orangeSurf)){

                    Box1.shapeColor = "orange"
                    music.play()
                    
                     }
                     else{
                       Box1 .shapeColor = "white"
                        
                      }


    drawSprites()
}
