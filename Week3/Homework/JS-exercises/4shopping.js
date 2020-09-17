/*
Create an array called shoppingCart that holds the following strings: "bananas" and "milk"
Write a function named addToShoppingCart
It takes 1 argument: a grocery item(string)
Add grocery item to shoppingCart.If the amount of items is more than 3 remove the first one in the array
Loops through the array in order to list out the items
Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
Call the function 3 times, each time with a different string as the argument.
*/
"use strict";

const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(groceryItem) {
    shoppingCart.push(groceryItem)
    if (shoppingCart.length > 3) {
      shoppingCart.shift()
    }
    return `You bought ${shoppingCart}!`
}

addToShoppingCart('cookies');
addToShoppingCart('butter');
addToShoppingCart('eggs');



