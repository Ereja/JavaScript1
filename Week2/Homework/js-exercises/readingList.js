"use strict";

//Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title(string), author(string), and alreadyRead(boolean indicating if you read it yet).

let booksList = [
  {
    Title: "Great Expectations",
    Author: "Charles Dickens",
    alreadyRead: true,
  },

  {
    Title: "The Cider House Rules",
    Author: "John Irving",
    alreadyRead: true,
  },
  {
    Title: "Nineteen Eighty-Four",
    Author: "George Orwell",
    alreadyRead: false,
  },
];

//Loop through the array of books.
for (let i = 0; i < booksList.length; i++) {
  console.log(booksList[i]);
}

//For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien"

for (let prop of booksList) {
  console.log(prop["Title"] + " by " + prop["Author"]);
}

//Create a conditional statement to change the log depending on whether you read it yet or not.If you read it, log a string like You already read "The Hobbit" right after the log of the book detail
//If you haven't read it log a string like You still need to read "The Lord of the Rings"

for (let prop of booksList) {
  if (prop.alreadyRead === true) {
    console.log("You already read " + prop["Title"]);
  } else {
    console.log("You still need to read " + prop["Title"]);
  }
}
