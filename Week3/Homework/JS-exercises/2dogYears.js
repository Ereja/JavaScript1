/*
Write a function named calculateDogAge.
It takes 1 argument: your (fictional) puppy's age (number).
Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
Call the function three times with different sets of values.
*/

"use strict";

function calculateDogAge(number) {
  const dogAge = Math.floor(number) * 7; //some people give age of their animals in presicion of months but it would make no sense to say that an actual human is 24 years and six months old!
  return `Your doggie is ${dogAge} years old in dog years!`;
}

//call function with different values
calculateDogAge(2);
calculateDogAge(5.5);
calculateDogAge(7);
