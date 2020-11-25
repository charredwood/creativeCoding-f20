// demonstrates sending a value from an arduino to p5js
// which inicates if a switch is pressed or not
// a switch is wired to pin 2 with a 10K pulldown resistor in parallel

const int switchPin = 2; // pin the switch is connected to
int switchVal = 0; // variable to hold the value from the switch

void setup() {
  // set pin as input
  pinMode(switchPin, INPUT);
  
  // initialize the serial communication:
  Serial.begin(9600);
}

void loop() {
  // read the value of the switch and store it
  switchVal = digitalRead(2);

  // write the value to the serial port
  Serial.println(switchVal);
  
  // wait a bit for between readings
  delay(10);
}
