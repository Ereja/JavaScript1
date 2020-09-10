"use strict";

//Declare a variable that holds an empty object literal(your meal recipe).
let rotiRecipe = {};

// Give the object 3 properties: a title(string), a servings(number) and an ingredients(array of strings) property.
(rotiRecipe.Title = "Roti"),
  (rotiRecipe.Servings = 4),
  (rotiRecipe.Ingridients = [
    "700gr chicken thighs - skinless, bonless",
    "400gr green beans",
    "500gr potatoes",
    "4 eggs",
    "3 madame jeanette peppers",
    "4 roti breads",
  ]);

// Log each property out separately, using a loop(for, while or do /while)

for (let prop in rotiRecipe) {
  if (rotiRecipe.hasOwnProperty(prop)) {
    console.log(prop + ": " + rotiRecipe[prop]);
  }
}

//for (let prop in rotiRecipe) {
//    console.log(prop, ":", rotiRecipe[prop]);
//}
