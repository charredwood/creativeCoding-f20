/* The code receives data from Arduino circuit through p5js Serial Port.
The code shows a short story. The story is already written once.
However, you can change it once through the physical interface.
It is connected to the Arduino circuit.
When you push the left button, the original story continues.
If you click the right switch, the time goes back slightly.
The user can roll back only once and will see the consequences.

[1]
I used the RiTa library (Version 1.12; Howe 2015) to perform natural language processing of the alternate story text.
Retrieved from https://rednoise.org/rita
*/

let firstStory, altStory, rGrammar, altTrigger, img, iX;
let sentenceCount = 0;
let rLines = [];
let serial, latestData; //serial port variables

//load two different story data
function preload() {
  firstStory = loadJSON("firstStory.json");
  altStory = loadStrings("altStory.json");
  img = loadImage('finalBackground.jpg');
}

function setup() {
  createCanvas(600, 600);
  iX = 0;

  //receive the sensor data through the serial port
  serial = new p5.SerialPort();
  serial.list();
  serial.open('/dev/tty.usbmodem141401');
  serial.on('connected', serverConnected);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('close', gotClose);

  //RiGrammar part
  rGrammar = new RiGrammar();
  rGrammar.loadFrom("altStory.json");
}

function serverConnected() {
  print("Connected to Server");
}

function gotClose() {
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  print(theerror);
}

function gotData() {
  let currentString = serial.readLine();
  trim(currentString);
  if (!currentString) return;
  console.log(currentString); //check the data
  latestData = currentString;
}

function draw() {
  
  //visuals
  //basic settings
  background(255);
  image(img, iX, 0);

  //default text style
  textFont('Georgia');
  noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(14);

  //display the original written story...
  if (firstStory) {
    for (i = 0; i < sentenceCount + 1; i++) {
      text(firstStory.plot[i].line, width / 2, 220 + 35 * i);
    }
  }
  //...sentence by sentence when the button is pushed
  if (latestData == "Button2") {
    proceed();
  }

  //alternate story
  if (altTrigger == 0) {
    alter();
  }

  //when the button is pressed, random amount of lines erased
  //this codes reside after the trigger to prevent overlapping between the newly generated texts and the previous ones
  if (latestData == "Button1") {
    sentenceCount = parseInt(random(0, sentenceCount));
    console.log(sentenceCount); //check if the count is changing
    altTrigger = 0; //fill in the blanks with a new story sequentially
  }
}

function proceed() {
  if (sentenceCount < 8) {
    sentenceCount = sentenceCount + 1;
  }
}

//generating the alternate random story with RiTa library
//this is separated to use noLoop safely outside of the draw
function alter() {
  let result = rGrammar.expand();
  let rSentence = result.split("!");
  for (let i = sentenceCount + 1; i < 9; i++) {
    textFont('Arial'); //distinguish the new part
    text(rSentence[i], width / 2, 220 + 35 * i);
    noLoop();
  }
}
