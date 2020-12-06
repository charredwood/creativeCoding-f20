/* This is a data visualization project using APIs.
The data contains a few cities' information.
Among various details, the name and the population of a city is used.
The size of the center circle gets larger as the number gets bigger.
When mouse is clicked, it randomly shows another city.
The beating motion represents the business and noise of the city.
*/

let myData;
let cityName, ppl;
let rCity = 0;

function setup() {
	createCanvas(450, 450);
	httpGet("https://data.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop%40public&sort=population&facet=country", myCallback);
	frameRate(30); //adjusted the speed
}

function myCallback(output) {
	//console messages for checking the data set
		// console.log(output);
		// console.log(typeof output);
		console.log(JSON.parse(output));
	
	//parsing API data
	let dParsed = JSON.parse(output);
	console.log(dParsed.records);
	myData = dParsed.records;

	//console messages to check the specific data value
		// console.log(dParsed.records[0].fields.city);
		// console.log(dParsed.records[0].fields.population);
}

function draw() {
	background(0);

	//the main circles
	ellipseMode(CENTER);
	noFill();
	stroke(215, 230, 250, 100);
	strokeWeight(5);
	ellipse(width / 2, height / 2, random(50, ppl * 0.00002));
		//added a smaller one to enhance the effect
		strokeWeight(2);
		ellipse(width / 2, height / 2, random(50, ppl * 0.00002 - 50));
	
	//loading the specific api data
	if (myData) {
		ppl = myData[rCity].fields.population;
		cityName = myData[rCity].fields.city;
	}

	//city name display
	noStroke();
	textSize(15);
	textAlign(CENTER);
	fill(234, 193, 193);
	text(cityName, width / 2, 100);
	//to double-check if the data is being loaded okay
		// console.log(ppl);
		// console.log(cityName);
}

function mouseClicked() {
	rCity = parseInt(random(myData.length)); //shows another city's data
}
