"use strict";

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length); // prints 42
myString = myString.replace(/,/g, " "); // g stands for global and will remove all the commas in a string.
console.log(myString); // hello this is a difficult to read sentence
