var mouseX;
var mouseY;

var meow;


function setup() {
    bg = loadImage('../media/images/catbak.jpeg');
    createCanvas(windowWidth, windowHeight);

  }

  function draw() {
    background(bg);

    beginShape();
    fill("black")
    ellipse(mouseX+12,mouseY-60,30,50)
    ellipse(mouseX+40,mouseY-40,30,50)
   ellipse(mouseX-12,mouseY-60,30,50)
   ellipse(mouseX-40,mouseY-40,30,50)
    ellipse(mouseX,mouseY,80,80);
  
    endShape(CLOSE);
   
    if (mouseIsPressed === true) {
beginShape();
vertex(489,82);
vertex(427,40);
vertex(443,63);
vertex(439,82);
vertex(446,109);
endShape(CLOSE);
      beginShape();
        vertex(180,82);
      vertex(207,36);
      vertex(214,63);
      vertex(219,82);
      vertex(226,109);
      endShape(CLOSE);
      ellipse(350, 250, 80, 50);
      ellipse(250,150,30,60);
      ellipse(430,150,30,60);
  
    } 

  
    }





