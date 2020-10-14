let myData;
let ppl;
let cityName;

function setup() {
	createCanvas(450, 450);
	httpGet("https://data.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop%40public&sort=population&facet=country", myCallback);
}

function myCallback(output) {
	//console messages for checking the data
		// console.log(output);
		// console.log(typeof output);

	console.log(JSON.parse(output));
	let dParsed = JSON.parse(output);

	console.log(dParsed.records);
	myData = dParsed.records;

	//test
		// console.log(dParsed.records[0].fields.city);
		// console.log(dParsed.records[0].fields.population);

	//Keys; not in use
		// let myKeys = Object.keys(dParsed.records);
		// console.log(myKeys);
}

function draw() {
	//a breathing shape
	background(76, 76, 76);
	ellipseMode(CENTER);
	noFill();
	stroke(215, 230, 250, 100);
	strokeWeight(10);
	ellipse(width/2, 250, random(100, 250));
	//frameRate(ppl * 0.000001);

	//city name display
	strokeWeight(2);
	textSize(15);
	textAlign(CENTER);
	fill(234, 193, 193);
	text(cityName, width/2, 100);
	
	//api data
	if (myData) {
		ppl = myData[0].fields.population;
		cityName = myData[0].fields.city;
	}
}