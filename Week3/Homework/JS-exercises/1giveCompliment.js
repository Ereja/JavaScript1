/*
Write a function named giveCompliment
It takes 1 argument: your name
Inside the function define a variable that holds an array, compliments, with 10 strings. Each string should be a compliment, like "great", "awesome"
Write code that randomly selects a compliment
Return a string: "You are [COMPLIMENT], [YOUR_NAME]!
Call the function three times, giving each function call the same argument: your name.*/

function giveCompliment(yourName) {
    const compliment = [
        "great",
        "awesome",
        "funny",
        "kind",
        "amazing",
        "charming",
        "clever",
        "considerate",
        "loveable",
        "cool",
    ];
    const randomSelect = compliment[Math.floor(Math.random() * compliment.length)];
    return `You are ${randomSelect} ${yourName}!`;
}

//calling a function
giveCompliment("Vaida");
giveCompliment("Vaida");
giveCompliment("Vaida");

//checking via console if function is working
console.log(giveCompliment("Vaida"));

