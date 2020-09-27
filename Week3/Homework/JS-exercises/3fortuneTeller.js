/*
Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random string values that have to do with the name of the variable
Write a function named tellFortune.
It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
Randomly select values from the arrays.
Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
Call the function 3 times, by passing the arrays as the argument.
*/

"use strict";

const numChildren = [0, 1, 2, 3, 4];
const partnerName = ["Roy", "Maurice", "Douglas", "Jen", "Richmond"];
const locations = ["Japan", "Bali", "The Netherlands", "Australia", "Canada"];
const jobs = [
  "web developer",
  "teacher",
  "family councelor",
  "guide",
  "waitress",
];

function tellFortune() {
  const children = numChildren[Math.floor(Math.random() * numChildren.length)];
  const partner = partnerName[Math.floor(Math.random() * partnerName.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const job = jobs[Math.floor(Math.random() * jobs.length)];
  const lifeRandomizer = `You will be a ${job} in ${location}, married to ${partner} with ${children} kids.`;
  return lifeRandomizer;
}

//calling the function
tellFortune();
tellFortune();
tellFortune();
