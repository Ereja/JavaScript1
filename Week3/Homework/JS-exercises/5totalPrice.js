/*
Create an object named cartForParty with 5 properties. Each property should be a grocery item (like beers or chips) and hold a number value (like 1.75 or 0.99)
Write a function called calculateTotalPrice
It takes 1 argument: an object that contains properties that only contain number values
Loop through the object and add all the number values together
Return a string: "Total: €[TOTAL_PRICE_ITEMS]"
Call the function 1 time, giving it the object cartForParty as an argument
*/

"use strict";

const cartForParty = {
  beer: 2.49,
  chips: 1.25,
  juice: 1.99,
  olives: 2.5,
  cheese: 2.99,
};

function calculateTotalPrice() {
  let total = 0;
  for (let price in cartForParty) {
    total += cartForParty[price];
  }
  return `Total: €${total}`;
}

calculateTotalPrice(); // "Total: €11.22"
