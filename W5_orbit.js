let planets = [];
let coreX;
let coreY;

function setup() {
	createCanvas(600, 600);
	coreX = width/2;
	coreY = height/2;
	angleMode(DEGREES);
	frameRate(10);

	for (let i = 0; i < 5; i++){
	planets[i] = new Planet(random(0.15, 0.55));
	}
}

function draw() {
	background(0);

	//orbit trail
	for (let i = 0; i < 5; i++) {
	strokeWeight(1);
	noFill();
	ellipseMode(CENTER);
	stroke(255, 50);
	ellipse(coreX, coreY, 135 + i * 62);

	//dusts
	strokeWeight(random(1, 3));
	stroke(255, 125);
	let spotX = [100, 378, 565, 49, 102];
	let spotY = [235, 49, 478, 100, 532];
	point(spotX[i], spotY[i]);
	
	//planets
	planets[i].appear(i);
	}

	//Sun(Center)
	fill(255);
	textSize(12);
	textStyle(BOLD);
	textAlign(CENTER);
	noStroke();
	text('memory', coreX, coreY);
}

class Planet {

	constructor(speed) {
		this.d = 50;
		this.a = 0;
		this.words = ['stays', 'you', 'move', 'time', 'flows'];
		this.p = speed;
	}

	appear(txt) {
		push();
		translate(coreX, coreY);
		rotate(this.a);
		this.a = this.a + this.p;
		noStroke();
		fill(255);
		textStyle(NORMAL);
		textSize(10);
		text(this.words[txt], this.d + txt * 35, this.d);
		pop();
	}
}
