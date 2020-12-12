//VER 2: Demo without the Arduino board
//Click to proceed the original story
//Enter to rewrite the alternate story

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

  //alternate story
  if (altTrigger == 0) {
    alter();
    // console.log("rewind"); //check if the code works
  }
}

function mouseClicked() {
  sentenceCount = sentenceCount + 1;
  if (sentenceCount > 8) {
  sentenceCount = 0;
  }
  // console.log(sentenceCount); //check the number
}

//when the button is pressed, random amount of lines erased
//this codes reside after the trigger to prevent overlapping between the newly generated texts and the previous ones
function keyTyped() {
  if (keyCode == ENTER) {
    sentenceCount = parseInt(random(0, sentenceCount));
    console.log(sentenceCount); //check if the count is changing
    altTrigger = 0; //fill in the blanks with a new story sequentially
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
