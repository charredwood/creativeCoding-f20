/*
This code is a physical interface for a p5js project.
The right button proceeds the original story.
When the right switch is clicked, the story will be partially deleted.
Also, the time display will goes back in time a little bit.
Then the alternate story will show up and the user will see the ending.

[Reference]
- Button code example: Blagojce Bill Kolicoski
https://github.com/bkolicoski/arduino-one-pin-buttons

- Clock display: Ryan Chan
https://www.hackster.io/ryanchan/tm1637-digit-display-arduino-quick-tutorial-ca8a93
*/

#include <TM1637.h>

//buttons(two switches) setting
int buttonPin = A2;

//clock setting
int CLK = 2;
int DIO = 3;
int timeDigit;

TM1637 tm(CLK, DIO);

void setup()
{
  //clock setup
  tm.init();
  //set brightness; 0-7
  tm.set(2);

  //serial port connection
  Serial.begin(9600);

  //default time
  timeDigit = 1023;
}

void loop()
{ 
  //number being displayed
  displayNumber(timeDigit);
  timeDigit = timeDigit + 1; //make the time flows
  if (timeDigit > 6000) {
    timeDigit = 0;
  }

  //read the button state
  int buttonState = analogRead(buttonPin);
  if (buttonState > 950 && buttonState < 1023) {
    Serial.println("Button1");
    timeDigit = timeDigit - 10; //make the time goes back
  } else if (buttonState > 450 && buttonState < 500) {
    Serial.println("Button2");
  }
  
  //button output test
  //Serial.println(buttonState);
}

//function for number display with a colon in the middle.
//Put integars in the parenthesis for the time at the starting point.
void displayNumber(int num)
{   
    tm.point(1);
    tm.display(3, num % 10);
    tm.display(2, num / 10 % 10);   
    tm.display(1, num / 100 % 10);   
    tm.display(0, num / 1000 % 10);
}
