"use strict";

//Declare a variable that holds an empty array, called drinkTray.
const drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];

//Create a loop that runs 5 times.On each iteration, push a drink into the drinkTray variable.The drinkTray can only hold at most two instances of the same drink type
/*
If there are already two instances of a drinkType then start with the next drink in the array.
Your drinkTray should contain 2 cola, 2 lemonade and 1 water.
Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" */
for (let i = 0; i < 5; i++) {
  if (i < 2) {
    drinkTray.push(drinkTypes[0]); //pushing cola in twice
  } else if (i < 4) {
    drinkTray.push(drinkTypes[1]); //pushing lemonade twice
  } else {
    drinkTray.push(drinkTypes[2]); // as 4 out of 5 loops are over, this will push water only once
  }
}
console.log("Hey guys, I brought " + drinkTray + "!");

/*There are 3 types of drinks (cola, lemonade, water. Only 5 total drinks can be placed on a tray. There has to be total of two colas, two lemonades and only one water. If tray is empty place not more than two bottles of cola. Then place not more than 2 lemonades. Fill the rest of the remaining space with water */
