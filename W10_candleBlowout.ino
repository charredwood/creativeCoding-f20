/*
This code is designed to mimic the experience of blowing out candles on a cake.
The circuit is attached to a device made of aluminium foil and it works similar to a pinwheel.
In short, the LEDs go off with a time gap because I'm always short of breaths to turn them off at once.

[reference]
example code: Blink
  modified 8 May 2014
  by Scott Fitzgerald
  modified 2 Sep 2016
  by Arturo Guadalupi
  modified 8 Sep 2016
  by Colby Newman

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/Blink
*/

const int LedA = 4;
const int LedB = 2;

void setup() {
//LEDs set-up
  pinMode(LedA, OUTPUT);
  pinMode(LedB, OUTPUT);
}

void loop() {
//LEDs turn on and then off in turn after five seconds
  digitalWrite(LedA, HIGH);
  {digitalWrite(LedB, HIGH);
  delay(5500);
  digitalWrite(LedA, LOW);
  delay(1000);
  digitalWrite(LedB, LOW);
  delay(1000);
  }
exit(0); //stop looping since the candles are out
}
