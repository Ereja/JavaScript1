"use strict";

//Create a function that fulfills the following requirements:
//Takes in 2 arguments
//Check the data type of each
//Compares each data type
//Logs to the console the message SAME TYPE if they are the same type.If they are different types log Not the same....
//Follow the steps:

//Write 2 console.log statements to log the type of 2 variables, each with a different data type
//Now compare the types of your different variables with one another
//Log Not the same...when the types are different

let personX = "Chandler Bing";
let personY = "Regina Phalange";
let redChair = { type: "chair" };
let blueCarpet = { type: "carpet" };

//checking data type
console.log(typeof personX); //string
console.log(typeof personY); //string
console.log(typeof redChair); // object
console.log(typeof blueCarpet); // object

//comparing if data types are the same
console.log(typeof personX === typeof personY); //true
console.log(typeof personX === typeof redChair); //false
console.log(typeof personX === typeof blueCarpet); //false
console.log(typeof personY === typeof redChair); //false
console.log(typeof personY === typeof blueCarpet); //false
console.log(typeof redChair === typeof blueCarpet); //true

//function using if statement to compare data types

function typeChecker(a, b) {
  if (typeof a === typeof b) {
    console.log("SAME TYPE");
  } else {
    console.log("NOT THE SAME");
  }
}

//calling the function
typeChecker(personX, personY);
typeChecker(personX, redChair);
typeChecker(personX, blueCarpet);
typeChecker(personY, redChair);
typeChecker(personY, blueCarpet);
typeChecker(redChair, blueCarpet);
