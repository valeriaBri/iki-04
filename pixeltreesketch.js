function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(24);
    noStroke(0);


}

var value = 0;
var direction = 0;
var a = 0;
var b = 0;
var tempo;
var anno = 2017;

function draw() {




    // RETTANGOLO IN cima


    fill(230);
    rect(0, 0, width, 50);

    // RETTANGOLO IN FONDO
    // FILL VARIA CON LA B
    colorMode(HSB);
    fill(100 + b, 35, 75);
    rect(0, height - (height / 8), width, height / 8)

    colorMode(RGB);

    tempo = anno - b * 5;

    /*if (tempo > 2400) {
        tempo = 2400;
    }*/

    fill(0);
    textSize(14);
    textFont("Montserrat");
    textAlign(CENTER);
    text(tempo, width / 2, 7.5 * height / 8 + 4)

    
}

function touchStarted() {
    value = touchX;
}

function touchMoved() {

    if (touchY > (7 * height) / 8) {
        direction = touchX - value;
       // console.log(value)
        if (direction > 0) {
            b = a + 1
        } else {
            b = a - 1
            b = a - 1


        }
        a = b;

       // console.log(b);
        value = touchX;

    }
    
    
    drawTrees();
}


function drawTrees() {

    for (var x = 0; x < width; x += 5) {
        for (var y = 0; y < height; y += 5) {

        tempo = anno - b * 5;
           

    /*    if ( tempo == 2017) {
          
        fill(121,165,104)
        } else if (tempo == 2002) {
          
          fill(166,189,122);
        } else if (tempo == 2042) {
          fill(90,134,97);
        }
        else {
          fill(0); 
        }*/
        
        var scuro = map(tempo,0,2400,100,0);
        
        var chiaro = map(tempo,0,2400,0,100);
        
        var medio1 = map(tempo,0,1200,0,33);

        var medio2 = map(tempo,1200,2400,33,0);

        if(random()< scuro /100) {
          
          fill(90, 134, 97)
        } 
          
           
        if(random()< chiaro /100) {
          fill(166, 189, 122)
        } 
         
     if(tempo < 1200 && random()< medio1 /100) {
          fill(121,165,104)
        } else if (tempo >= 1200 && random()< medio2 /100) {
          fill(121,165,104)
        } 

  
            /*if (b >= 0) {
                if (random() < (b + 1) / 100) {
                    fill(121, 164, 104);
                }
                if (random() < (b + 1) / 100) {
                    fill(166, 189, 122);
                }
                if (random() < (b + 1) / 100) {
                    fill(90, 134, 97);
                }

            } else {

                if (random() < abs((b + 1) / 100)) {

                    fill(90, 134, 97);

                }

                if (random() < abs((b + 1) / 100)) {

                    fill(121, 164, 104);

                }

                if (random() < abs((b + 1) / 100)) {

                    fill(166, 189, 122);

                }
            }*/



            //80% alberi

            rect(x, y, 5, 5);

        }
    }
}

/*function windowResize(){
  resizeCanvas(windowWidth,windowHeight)
  };*/



/*
function setup(){
  background(0);
  bottone = createButton('click me');
  bottone.position(400,400);
  bottone.mousePressed(changeBG);
}

function changeBG() {
  var val=random(255);
  background(val);
}
*/