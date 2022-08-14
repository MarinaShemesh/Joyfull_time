console.log('joyfull time')

function setup(){
  createCanvas(2000, 2000);
  angleMode(DEGREES);
  colorMode(HSB)


}

let a = 0;

function draw(){
  background(250, 45, 96);
  translate(width/2, height/2);

  vierkant(850);
}


function vierkant(radius){
 
for(let theta = 0; theta < 360; theta += 20){
  let vierX = radius  * cos(theta);
  let vierY = radius  * sin(theta);


 
  fill(41, 100, 100);
  ellipse (vierX, vierY, 75, 75)
  stroke (41, 100, 100);
  //strokeWeight(0 +a);
  
  
 strokeWeight(5);
  
  rotate (a);
  line (0, 0,vierX ,vierY );

  a += 0.01;
 
}


}

