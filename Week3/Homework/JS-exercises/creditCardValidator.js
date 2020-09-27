/*
Input must be 16 characters
All characters must be numbers
At least two different numbers should be represented
The last number must be even
The sum of all the numbers must be greater than 16
*/

"use strict";

function creditCardValidator(cardNumber) {
  //checking if there are 16 numbers
  if (cardNumber.length !== 16) {
    return `The input (${cardNumber}) must contain 16 numbers!`;
    //checking if everything is a number
  } else if (isNaN(cardNumber)) {
    return `The input (${cardNumber}) must contain only numbers!`;
    //including function for different numbers
  } else if (differentNumbers(cardNumber)) {
    return `The input (${cardNumber}) must contain more than one type of number!`;
    //including function of numbers num to check if sum is greater than 16
  } else if (numbersValue(cardNumber) <= 16) {
    return `The sum of input (${cardNumber}) must be greater than 16!`;
    //only if last number is even, the whole number will be even. We can use remainder to check it
  } else if (cardNumber % 2 !== 0) {
    return `The last number of input (${cardNumber}) must be even!`;
  } else {
    return `${cardNumber} is a valid credit card number!`;
  }
}

//function to check if there is more than one type of number
function differentNumbers(number) {
  for (let i = 0; i < number.length; i++) {
    if (number[0] !== number[i]) return false;
  }
  return true;
}

//function to add all numbers
function numbersValue(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }
  return sum;
}

creditCardValidator("4444444444444444");
creditCardValidator("a92332119c011112");
creditCardValidator("1111111111111110");
creditCardValidator("6666666666666661");
creditCardValidator("6666666666661666");
creditCardValidator("9999777788880000");

console.log(numbersValue("66"));
