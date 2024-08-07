// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// a. number
var scoreAvg=3.45214
Math.round(scoreAvg)
console.log( "number:" ,scoreAvg);


// b. round off value of the number
var scoreAvg=3.45214;
var scoreAvg = Math.round(scoreAvg)
console.log("round off value:", scoreAvg)

// c. floor value of the number

 var floor1 = Math.floor(3.45214);
 var floor1 = Math.floor(3.45214);
 console.log("floor value:", floor1)

//  d. ceil value of the number

var ceil =(3.45214)
 var scoreAvg = Math.ceil(3.45124)
console.log("ceil value:",  scoreAvg)



var number = Math.random();
console.log(number);
var improvedNum = (number * 6) + 1;
console.log(improvedNum);
 var finalNum = Math.floor(improvedNum);
console.log(finalNum);


var scoreAvg = Math.ceil(.000001);

var scoreAvg = Math.floor(.999999);


var randomNumber = Math.random();

 var bigDecimal = Math.random();
 var improvedNum = (bigDecimal * 6) + 1;
 var numberOfStars = Math.floor(improvedNum);


// 2.Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// a. number
var scoreAvg= -2.673
Math.round(scoreAvg)
console.log( "number:" ,scoreAvg);


// b. round off value of the number
var scoreAvg=-2.673;
var scoreAvg = Math.round(scoreAvg)
console.log("round off value:", scoreAvg)

// c. floor value of the number

 var floor1 = Math.floor(-2.673);
 var floor1 = Math.floor(-2.673);
 console.log("floor value:", floor1)

//  d. ceil value of the number

var ceil =(-2.673)
 var scoreAvg = Math.ceil(-2.673)
console.log("ceil value:",  scoreAvg)




// 3.Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// Function to calculate absolute value
function absoluteValue(num) {
    return Math.abs(num);
  }
  
  // Test the function
  var number = -4;
  console.log("Absolute value of " + number + " is " + absoluteValue(number));
  
  number = 5;
  console.log("Absolute value of " + number + " is " + absoluteValue(number));
  


// 4.Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


//  Function to roll a dice
function rollDice() {
    var diceValue = Math.floor(Math.random() * 6) + 1;
    return diceValue;
  }
  
  // Roll the dice and display the result
  var result = rollDice();
  document.write("You rolled a " + result + " on the dice.");
  
  

// 5.Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// Function to toss a coin
function tossCoin() {
    let coinValue = Math.random();
    if (coinValue < 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }
  
  // Toss the coin and display the result
  let result = tossCoin();
  document.write("You tossed a coin and got: " + result);
  
  





// 6.Write a program that shows a random number between 1
// and 100 in your browser.

// / Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write("Random Number: " + randomNumber);




// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//  Ask the user for their weight
 var userWeight = prompt("Enter your weight in kilograms");

// Parse the user input
var weightInKgs = parseFloat(userWeight.replace("kgs", "").replace("kilograms", ""));

// Display the user's weight in the browser
document.write("The weight of user is: " + weightInKgs + " kgs");






// 8.Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// Store a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number between 1 and 10
var userGuess = prompt("Guess a number between 1 and 10:");

// Check if the user's guess matches the secret number
if (parseInt(userGuess) === secretNumber) {
  alert("Congratulations! You guessed the secret number!");
// } else {
//   alert("Sorry, the secret number was " + secretNumber + ". Try again!");
// }
} else {
    alert("Try again, "+" <br> Prevent this page from creating additional dialogs "+ secretNumber );
  }
