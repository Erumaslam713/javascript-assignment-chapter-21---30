 // 1. Write a program that takes two user inputs for first and
  // last name using prompt and merge them in a new variable
    // titled fullName. Greet the user using his full name.

//const { isJsxAttribute } = require("typescript");


// Prompt the user for their first name
 var firstName = prompt("Please enter your first name:");

 // Prompt the user for their last name
 var lastName = prompt("Please enter your last name:");

 // Merge first and last name into fullName
// var fullName = firstName + " " + lastName;

//  Greet the user using their full name
alert("Hello, " + fullName + "!");


 


//  2. Write a program to take a user input about his favorite
 // mobile phone model.Find and display the length of user input in your browser

// prompt the use their favourite mobile phone model
var favoritePhoneModel = prompt("Enter your favourite mobile phone model:")

// find the length of the input 
var inputLength = favoritePhoneModel.length;

// Display the length of user input in the browser
console.log("My favourite phone is: Samsung Galary S6 Edge Plus Length of string:" + inputLength);




// 3.Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// Define the word
var word ="Pakistan";

// find the index of letter "n"
 var indexOfN = word.indexOf("n");

//  Display the result in the brow
document.write("String: Pakistani <br> Index of 'n': "+ " "+ indexOfN );



 // 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// # Define the string
 var text = "Hello World";

// // # Find the last index of the letter "l"
 var last_index = text.lastIndexOf('9');

 // # Display the result
 document.write("String: Hello World<br> Last Index of 'l': "+" "+ 9);

 // The last index of 'l' in 'Hello World' is: 9

// 5. Write a program to find the character at 3rd index in the
 // word “Pakistani” and display the result in your browser.

// Define the string
var text = "Pakistani";

// # Find the character at the 3rd index
var character = text[3];

// # Display the result
document.write("String: Pakistani <br>Character at index: 3:", character)

// 6. Repeat Q1 using string concat() method.
// Prompt the user for their first name

var firstName = "Erum";
var lastName = "Aslam";
var fullName = firstName + " " + lastName
console.log(fullName)


 // 7. Write a program to replace the “Hyder” to “Islam” in the
 // word “Hyderabad” and display the result in your browser.

// // Define the string
 var text = "Hyderabad";

// // # Replace "Hyder" with "Islam
 var modified_text = text.replace("Hyder", "Islam");

//  // # Display the result
document.write("City:Hydrabad <br> After replacement : " + modified_text)


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
//  var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// Define the string
var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&"
var modifiedMessage = message.replace(/and/g, "&");

// Display the result
document.write("Th message is:", modifiedMessage);


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// Define the string
var stringValue = "472";

// Convert the string to a number
var numberValue = Number(stringValue);

// // Display the values and their types
console.log("Value:", stringValue );
console.log("Type:", typeof stringValue);

console.log("Value:", numberValue );
console.log("Type:" ,typeof numberValue);


// 10. write a program that takes user input. Convert and show the 
// input in capital capital Letters.

// Ask the user for input
var userInput = prompt("Enter your favourite fruit:");

// Convert the input to capital letters
var upperCase = userInput.toUpperCase();

// Display the result
console.log("user input:" ,userInput +  "\nUpper case: " + upperCase);


// 11. Write a program that takes user input. Convert and
// show the input in title case.


// Take user input
var userInput2 = prompt("Enter a string:");

// Convert to title case
var titleCase = userInput2.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

// Display the result
console.log("User input:", userInput2 + "\nTitle case: " + titleCase);


// Example 2
var myString = "this is a simple string";
var titleCase  = myString[0].toUpperCase()+  myString.slice(1).toLocaleLowerCase();
console.log(titleCase)



// Ex3

function toTitleCase(str){
  return str.replace(/\w\s*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  })
}


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.



// Given variable
var num = 35.36;

// Convert num to string and remove dot
var strNum = num.toString().replace(".", "");

// Display the result
document.write("Number: ", + num + '<br>' + " Result: ", strNum);  // Outputs: 3536


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// Function to check if username is valid
function isValidUsername(username) {
  // Check if username contains any special symbols
  for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
      return false;
    }
  }
  return true;
}

// Take username as input from user
var username = prompt("Enter a username:");

// Check if username is valid
while (!isValidUsername(username)) {
  username = prompt("Invalid username. Please enter a valid username:");
}

// Store username in a variable
var storedUsername = username;

// Display success message
document.write("Valid username entered: " + storedUsername);



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// Given array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(arr, item) {
  // Convert the item to lowercase for case-insensitive search
  item = item.toLowerCase();

  // Use the includes() method to search for the item in the array
  // Convert each array element to lowercase for case-insensitive search
  return arr.some(element => element.toLowerCase().includes(item));
}

// Take user input
var userInput = prompt("Enter an item to search:");

// Search for the item in the array
var found = searchItem(A, userInput);

// Prompt the user whether the item is found or not
if (found) {
  alert(userInput + " Welcome to ABC Bakery. What do you want to order sir/ma'am?");
} else {
  alert(userInput + " Welcome to ABC Bakery. What do you want to order sir/ma'am? ");
}


Example2
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userinput5 = prompt("Enter the item you want to seach:").toLowerCase();
var lowerCaseArry = A.map(function(item) {
  return item.toLowerCase();
});
var itemIndex = lowerCaseArry.indexOf(userinput5);

if(itemIndex !== -1) {
  alert(userinput5 + "is available at index" + " "+itemIndex +" "+"in our bakery")
}else {
  alert(userinput5 + " We are sorry. "+" "+itemIndex +" "+ "is not available in our bakery")
}



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// Function to check if password is valid
function isValidPassword(password) {
  // Check if password is at least 6 characters long
  if (password.length < 6) {
    return false;
  }

  // Check if password starts with a number
  if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    return false;
}
}
// Check if password contains both alphabets and numbers
var hasAlphabet = false;
var hasNumber = false;
for (let i = 0; i < password.length; i++) {
  var charCode = password.charCodeAt(i);
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
    hasAlphabet = true;
  } else if (charCode >= 48 && charCode <= 57) {
    hasNumber = true;
  }
}
  if (!hasAlphabet || !hasNumber) {
    return false;
  }

  return true;


// // Take password as input from user
var password = prompt("Enter a password:");

// Check if password is valid
while (!isValidPassword(password)) {
  password = prompt("Invalid password. Please enter a valid password:");
}

// Display success message
document.write("Valid password entered!");

Example2
function validatePassword(){
  var 
  if(passwod.lenght< 6) {
  alert("Password must be at least 6 characters long.")
}
}




// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// Given string
var university = "University of Karachi";

// Convert the string to an array using split()
var universityArray = university.split(" ");

// Display the elements of the array
document.write("<br> ");
for (var i = 0; i < universityArray.length; i++) {
  document.write(universityArray[i] + "<br>" );
}






// 17. Write a program to display the last character of a user
// input.


// Ask the user for input
var userInput1 = prompt("Please enter some text:");

// Get the last character of the input
var lastChar = userInput1.slice(-1);

 // Display the result
 document.write("Last character of  input is: " + lastChar);




// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// Given string
varstr = "The quick brown fox jumps over the lazy dog";

// Convert the string to lowercase to make the search case-insensitive
var lowerCaseStr = str.toLowerCase();

// Split the string into words
var words = lowerCaseStr.split(" ");


// Count the occurrences of the word "the"
var count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
}
}

// Display the result
 document.write("The quick 'the' brown fox jumps over the lazy dog”.  Write a program to count number of occurrences of word “the”  " + count + " times in the given string.");


Ex2


// /You have a string
var str = "The quick brown fox jumps over the lazy dog";

//Convert the string to lowercase to make the search case-insensitive
var lowerStr = str.toLowerCase(); 

//Split the string into an array of words
var words = lowerStr.split(' '); 
var count = 0;

for (var i = 0; i < words.length; i++) 
    if (words[i] === 'the') {
        count++;
//     }
}
// Display the count in the console
console.log("Text: The quick brown fox jumps over the lazy dog\n There are "
+count+" occurrence(s) of word 'the' ");


