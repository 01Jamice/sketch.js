let angle = 0;


function setup() {
   creativeCanvas(windowWidth, windowHeight);
}


function draw() {
	background(78);

	push();
	translate(width/2, height/2);
	rotate(angle);
	fill(255);
	noStroke();
	rectMode(CENTER);
	square(0,0, 200);
	pop();

	for (let a=0; a<radians(360); a=+radians(30)) {
	  push();
	  translate(width/2, height/2);
	  rotate(a);
	  translate(0, 200);
	  rotate(angle);
	  rectMode(CENTER);
	  square(0,0, 50);
	  pop();

	}


    angle += radians(1.5);
}