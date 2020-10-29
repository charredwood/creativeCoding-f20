let horizon = 300;
let sR = 450;
let mNumber = 0.2;
let aHill;

function setup () {
	createCanvas(1260, 720);
	aHill = new newHill(); //refer to 'midtermObjects.js' file
	frameRate(4); //speed control
}

//Interaction #1 : the meteor rain gets more intense by clicking
function mouseClicked() {
	mNumber = mNumber + 0.2;
}

function draw() {
	background(0); //invalid

	//Color palette
	let p = {
	black : color(0), blue : color(0, 86, 120), cyan : color(5, 217, 232),
	lime : color(227, 255, 109), dustylime : color(204, 217, 150), orange : color(235, 128, 113),
	cherry : color(58, 0, 18), magenta : color(255, 42, 109), pink : color(214, 105, 154)
	}

	//Background; used the function twice to make three-color gradient
	setGradient(0, 100, p.cherry, p.blue, height, width);
	setGradient(0, 0, p.black, p.cherry, 100, width);

	//Ocean in the night; bottom layer image
	newOcean(p.cyan);

	//Aerial objects
		//sun; layers of arcs
		angleMode(DEGREES);
		noStroke();
		//Interaction #2 : the sun brightens along with the ocean shade changes; see line 122-123
		fill(235, 128, 113, mouseY / 30); //alpha value changes
		ellipseMode(CENTER);
		Sun(180, 0); Sun(190, 350); Sun(200, 340); Sun(210, 330);
		Sun(220, 320); Sun(230, 310); Sun(243, 297);

		//make meteors rain;
		//variable 'i' controls the total number and intensity of the rain; see line 13-15
		for (let i = 0.2; i <= mNumber; i += 0.2){
		newRain(i);
	}
		//default stars
		for (let g = 0; g < 10; g++){
		push();
		noStroke();
		fill(255, 150);
		strokeWeight(random(1, 3));
		ellipse(random(0, width), random(0, horizon), random(1, 3));
		pop();
		}

	//Ground
		//horizontal lines
		for (let i = 0; i < height; i++) {
			let gridColor1 = lerpColor(p.lime, p.magenta, i / 10);
			strokeWeight(1);
			stroke(gridColor1);
			line(0, horizon + i*i, width, horizon + i*i);
		}

		//vertical lines
		for (let j = 1; j < width; j += 2) {
			let gridColor2 = lerpColor(p.magenta, p.lime, j / 10);
			stroke(gridColor2);
			strokeWeight(1);
			line(width/2 - 30 * j, horizon, width/2 - 120 * j, height);
			line(width/2 + 30 * j, horizon, width/2 + 120 * j, height);
		}

		//islands; see line 8
		aHill.type1(-30, 130, 33, 70, 60, 0.7, p.dustylime);
		aHill.type1(-30, 130, 33, 70, 60, 0.7, p.dustylime);
		aHill.type1(243, 138, 36, 93, 63, 0.8, p.orange);
		aHill.type2(126, 180, 27, 66, 0, 0.8, p.pink);
		aHill.type2(746, 0, 36, 84, 0, 1.0, p.dustylime);
		aHill.type1(465, -69, 33, 60, 60, 2.1, p.magenta);
		aHill.type2(240, -75, 27, 60, 0, 3.2, p.magenta);
		//make them sway
		aHill.move(random(-0.2, 0.2), 0);
}

//Gradation tool
function setGradient(x, y, col1, col2, h1, w1) {
	for (let k = 0; k < h1; k++) {
		let inter = map(k, 0, h1, 0, 1);
		let col = lerpColor(col1, col2, inter);
		stroke(col);
		line(x, k + y, w1, k + y);
	}
}

//Objects
	//draw the sun
	function Sun(x2, y2) {
		arc(width/2, horizon, width/3, sR, x2, y2, OPEN);
	}

	//default meteors
	function newRain(b) {
		let start = random(0, width);
		let end = random(0, horizon);
		let a = 30;
		let startPrime = lerp(start, start + a, b);
		let endPrime = lerp (end, end - a, b);
		strokeWeight(1);
		stroke(255, 150);
		line(startPrime, endPrime, start, end);
		line(start + a, end - a, start, end);
	}

	//create the midnight ocean + Interaction #3
	function newOcean(col) {
		for (let j = 0; j < width; j += 0.4) {
			//as the sun rises, the midnight ocean shades fade away
			//interacts along with the sun; see line 39
			let x1 = map(mouseY, 0, width / 2, width / 2, width / 4);
			let x2 = map(mouseY, 0, width, width / 2, width);
			stroke(col);
			strokeWeight(1);
			line(x1 - 30 * j, horizon, width / 2 - 120 * j, height);
			line(x2 + 30 * j, horizon, width / 2 + 120 * j, height);
			}
	}
