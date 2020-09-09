"use strict";
//Add the variable to your file.
let myString = "hello,this,is,a,difficult,to,read,sentence";

//Log the length of myString.
console.log(myString.length); // prints 42

//Find a way to remove the commas from the string and replace them with spaces
myString = myString.replace(/,/g, " "); // g stands for global and will remove all the commas in a string.

//After replacing the commas, log myString to see if you succeeded.
console.log(myString); // hello this is a difficult to read sentence
