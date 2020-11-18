/*
The color of LED changes by an analog sensor and indicates the compatibility.
Outside of the circuit, the potentiometer is tied to a string physically.
If one person who is connected to the string gets closer to the other one over time,
the led light becomes white to pink.

[References]
- RGB LED light setting: Aqib @ Arduino Project Hub
https://create.arduino.cc/projecthub/muhammad-aqib/arduino-rgb-led-tutorial-fc003e

- Analog Sensor setting: Alex Nathanson
https://github.com/alexnathanson/DM-GY-6063-CreativeCoding-C-Fall-2020-Nathanson/blob/master/10-arduino/AnalogSensorCalibration/AnalogSensorCalibration.ino
*/

const int rPin= A7;
const int gPin = A6;
const int bPin = A5;
const int sensorPin = A0;

//declaring a variable
int sensorValue = 0;

void setup() {
  Serial.begin(9600);

//RGB led pin setup
  pinMode(rPin, OUTPUT);
  pinMode(gPin, OUTPUT);
  pinMode(bPin, OUTPUT);
}

void loop() {

//potentiometer input
sensorValue = analogRead(sensorPin);

//check if the sensor is working
  Serial.print("sensor = ");
  Serial.println(sensorValue);

//if conditional to change the color depending on the sensor value
  if (sensorValue > 500) {
    colorRGB(255, 0, 125);
  } else {
    colorRGB(125, 125, 125);
  }
}

//function for the led's color setting
void colorRGB(int rPinValue, int gPinValue, int bPinValue) {
  analogWrite(rPin, rPinValue);
  analogWrite(gPin, bPinValue);
  analogWrite(bPin, gPinValue);
}
