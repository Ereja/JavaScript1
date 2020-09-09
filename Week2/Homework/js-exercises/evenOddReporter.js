"use strict";

for (let i = 0; i <= 20; i++) {
  //only numbers whose remainder isn`t 0 are odd
  if (i % 2 != 0) {
    console.log("The number", +i, "is odd!");
  } else {
    console.log("The number", +i, "is even!");
  }
}
