var value = false;
var y = 0;
var direction = 0;
var delta = 0;
var a = 0;
var b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
    noStroke();
}

function touchStarted() {
    
   if (mouseY < (7*height)/8) {
       
       if(value == false) {
           value = true;
       }
   
   } else if (mouseY > (7*height)/8){
       delta = touchX;
   }
}

function touchEnded() {
    
    if (mouseY < (7*height)/8) {
        
        if(value == true) {
            value = false;
        } 
    } 
}

function touchMoved() {
    
    if (mouseY > (7*height)/8) {
        
        direction = touchX - delta;
//      console.log(direction)
      
        if(direction > 0) {
            b = a + 1
            } else {
            b = a - 1
//valueX = touchX - valueX;
        }
        
        a = b;
        console.log(b);
        delta = touchX;
    
    }
}


var anno = 2017;


function draw() {
    background(141, 178, 162);
    
    noStroke;
    fill(230, 217, 203);
    rect(0,0,windowWidth,y);
    
    
    //RETT SUPERIORE MENU
    fill(230);
    rect(0,0,width,50)
    

    
    // RETTANGOLO IN FONDO
    // FILL VARIA CON LA B
    colorMode(HSB);
    fill(180+b,35,75);
    rect(0,height-(height/8),width,height/8)
    
    colorMode(RGB);
    // modificare i valori di seguito per rallentare o velocizzare
    
    var valDiscesa = 2;
    var valSalita = 2 + b/40;
         // console.log(valSalita)

    /*if (valSalita < 1){
        valSalita = 0.1;
    }*/
    
    var tempo = anno - b*5;
    
    /*if (tempo > 2400) {
        tempo = 2400;
    }*/
    
    fill(0);
    textSize(14);
    textFont("Montserrat");
    textAlign(CENTER);
    text(tempo,width/2,7.5*height/8+4)
    
    if (value == true && y < height-height/8){
        
       for(i=0; i < valDiscesa ; i++){
        
           y = y + 1;
       } 
    
    } else if (value == false && y > 50){
        
        for(i=0; i < valSalita ; i++) {
            
            y = y - 1;
        } 
        
    }
        
}

  
  // Touch within the image to change
// the value of the rectangle
