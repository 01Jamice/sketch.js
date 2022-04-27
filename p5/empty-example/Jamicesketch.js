var person = 0;

function setup() {
  // put setup code here
  creatCanvas(500,500) ;
}
function mousePressed(){
  person = 50;

}
function draw() {
  background("#003366");
  fill ("#FF0000");
  noStroke()
  rectMode(CENTER); 
  rect(width/2,height/2, 100,100);
  rect(width/s-45,height/2, 85,10,75);
  noStroke();
  fill("#00FF00");
  ellipse(width/2, height/2, person, person);    // put drawing code here
}