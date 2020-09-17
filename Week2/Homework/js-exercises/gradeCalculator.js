/*
You got a D (60%)!
Make a JavaScript file with a name that describes its contents
Use either a switch or if/else statement
Write at least 2 comments that explain to others what a line of code is meant to do
Make the return value of the function a template string, so you can insert variables!
Use node from the command line to test if your code works as expected*/

"use strict";

//empty variables for using in a function

let letterGrade = "";
let grade = "";

//function - is a JS keyword. gradeCalculator - is a name of this function. grade - is a parameter of a function.

//assigning letters which will be printed out once equivalent numbers in range are entered
function gradeCalculator(grade) {
  if (grade >= 0 && grade <= 49) {
    letterGrade = "F";
  } else if (grade >= 50 && grade <= 59) {
    letterGrade = "E";
  } else if (grade >= 60 && grade <= 69) {
    letterGrade = "D";
  } else if (grade >= 70 && grade <= 79) {
    letterGrade = "C";
  } else if (grade >= 80 && grade <= 89) {
    letterGrade = "B";
  } else if (grade >= 90 && grade <= 100) {
    letterGrade = "A";
  } else {
    return "You have entered an incorrect value. Please enter a number between 0 and 100";
  } //eror message if number is not 0-100
  return `You got a ${letterGrade} ${grade}%!` 
}

//calling a function
gradeCalculator(60);
gradeCalculator(10);

//console log to  check if function is working
console.log(gradeCalculator(60)); // got got D
console.log(gradeCalculator(588)); //inccorect value message
