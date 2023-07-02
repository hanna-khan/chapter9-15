// USER INPUT & CONDITIONAL STATEMENT
// Assignment # 9-10

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var user = prompt("Enter Your City");
if (user == "Karachi") {
  document.write("Welcome to city of lights!");
} else {
  document.write("Welcome to another city!");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gender");
if (gender === "male") {
  document.write("Good Morning Sir.");
} else if (gender === "female") {
  document.write("Good Morning Ma’am.");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

var colors = prompt("Enter the color");
if (colors === "red") {
  document.write("Must Stop");
} else if (colors === "yellow") {
  document.write("ready to move");
} else if (colors === "green") {
  document.write("move now");
}

var fuel = +prompt("Enter the fuel in litres");
if (fuel == "0.25") {
  document.write("“Please refill the fuel in your car”");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
// line no 82
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

let percentage = +prompt("Enter Your Percentage");
if (percentage >= 80 && percentage <= 100) {
  document.write("A-One ");
  document.write("Excellent");
} else if (percentage >= 70 && percentage <= 80) {
  document.write("A ");
  document.write("Good");
} else if (percentage >= 60 && percentage <= 70) {
  document.write("B ");
  document.write("You need to improve");
} else if (percentage < 60 && percentage >= 0) {
  document.write("Fail ");
  document.write("Sorry");
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
var number = 6;
var secretNumber = prompt("Enter a number");
if (number == secretNumber) {
  document.write("Bingo! Correct Answer");
} else if (secretNumber == number + 1) {
  document.write("Close Enough to the correct answer!");
} else {
  document.write("Not Even Close!");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var askNumber = prompt("Enter a number");
if (askNumber % 3 === 0) {
  alert(askNumber + " is divisible by 3");
} else {
  alert(askNumber + " is not divisible by 3");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num = +prompt("enter num");
if (num % 2 === 0) {
  document.write("Even number");
} else {
  document.write("odd number");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt("Enter temp");
if (temp > 40) {
  document.write("It is too hot outside.");
} else if (temp > 30) {
  document.write("The Weather today is Normal.");
} else if (temp > 20) {
  document.write("Today’s Weather is cool.");
} else if (temp > 10) {
  document.write("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = +prompt("Enter a num1");
var operator = prompt("Enter an operator");
var secondNumber = +prompt("Enter a num2");
if (operator == "*") {
  document.write(firstNumber * secondNumber);
} else if (operator == "+") {
  document.write(firstNumber + secondNumber);
} else if (operator == "-") {
  document.write(firstNumber - secondNumber);
} else if (operator == "/") {
  document.write(firstNumber / secondNumber);
}

// line no 184
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let input = prompt("Enter a character:");
let ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  console.log("The input is a number.");
} else if (ascii >= 65 && ascii <= 90) {
  console.log("The input is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
  console.log("The input is a lowercase letter.");
} else {
  console.log("The input is not a number or letter.");
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var intergar1 = +prompt("enter a number 1");
var intergar2 = +prompt("enter a number 2");

if (intergar1 > intergar2) {
  document.write(intergar1);
} else {
  document.write(intergar2);
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number = parseInt(prompt("Enter a number"));
if (number === 0) {
  document.write("zero");
} else if (number > 0) {
  document.write("positive number");
} else {
  document.write("negative number");
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var character = prompt("Enter a vowel");
if (
  character === "a" ||
  character === "e" ||
  character === "i" ||
  character === "o" ||
  character === "u"
) {
  alert("true");
} else {
  alert(false);
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
var password = prompt("create a password");
var correctPassword = prompt("Write your password that you just created");
if (correctPassword === password) {
  document.write(
    "“Correct! The password you entered matches the original password”."
  );
} else if (correctPassword === "") {
  document.write("“ Please enter your password”");
} else {
  document.write("“Incorrect password”");
}

// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  document.write(greeting);
} else {
  greeting = "Good evening";
  document.write(greeting);
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// let time = prompt("Please enter the time in 24-hour format (e.g. 1900 for 7pm):");

if (time >= 0 && time <= 1159) {
  console.log("Good morning!");
} else if (time >= 1200 && time <= 1759) {
  console.log("Good afternoon!");
} else if (time >= 1800 && time <= 2359) {
  console.log("Good evening!");
} else {
  console.log("Invalid time entered.");
}

//ARRAYS

// 1. Declare an empty array using JS literal notation to store
// student names in future.

var studentName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentName = {};
// 3. Declare and initialize a strings array.
var stringArray = ["Afza", "Malaika", "Hania"];

// 4. Declare and initialize a numbers array.
var numberArray = [1, 2, 3, 4, 5, 6];
// 5. Declare and initialize a boolean array.
var booleanArray = [true, false];
// 6. Declare and initialize a mixed array.
var mixedArray = [1, 2, "Hania", true, null];
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var availableEducation = [
  "SSC",
  "HSC",
  "BSC",
  "BS",
  "BCOM",
  "MS",
  "M. PHIL",
  "PhD",
];
document.write(availableEducation);
// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display  the scores & percentages of students like:

var students = ["Afza", "Hania", "Malaika"];
var scores = [405, 400, 442];
var totalMarks = 500;
var percent1 = (scores[0] / totalMarks) * 100;
var percent2 = (scores[1] / totalMarks) * 100;
var percent3 = (scores[2] / totalMarks) * 100;
document.write(
  `${students[0]} has scored ${scores[0]} scores and got a percenatge of ${percent1} <br>`
);
document.write(
  `${students[1]} has scored ${scores[1]} scores and got a percenatge of ${percent2} <br>`
);
document.write(
  `${students[2]} has scored ${scores[2]} scores and got a percenatge of ${percent3}`
);

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// Initialize array with color names
let colors = ["red", "green", "blue"];

// Display array in browser
document.write("<h3>Initial Colors:</h3>");
document.write(colors + "<br>");

// Ask user to add color to beginning of array
let newColor = prompt("Enter color to add to beginning of array:");
colors.unshift(newColor);

// Display updated array in browser
document.write("<h3>After adding color to beginning:</h3>");
document.write(colors + "<br>");

// Ask user to add color to end of array
newColor = prompt("Enter color to add to end of array:");
colors.push(newColor);

// Display updated array in browser
document.write("<h3>After adding color to end:</h3>");
document.write(colors + "<br>");

// Add two more colors to beginning of array
colors.unshift("purple", "yellow");

// Display updated array in browser
document.write("<h3>After adding two colors to beginning:</h3>");
document.write(colors + "<br>");

// Delete first color in array
colors.shift();

// Display updated array in browser
document.write("<h3>After deleting first color:</h3>");
document.write(colors + "<br>");

// Delete last color in array
colors.pop();

// Display updated array in browser
document.write("<h3>After deleting last color:</h3>");
document.write(colors + "<br>");

// Ask user to add color at specific index
let index = parseInt(prompt("Enter index at which to add color:"));
newColor = prompt("Enter color to add:");
colors.splice(index, 0, newColor);

// Display updated array in browser
document.write("<h3>After adding color at specific index:</h3>");
document.write(colors + "<br>");

// Ask user to delete color(s) at specific index
index = parseInt(prompt("Enter index at which to delete color(s):"));
let numColors = parseInt(prompt("Enter number of colors to delete:"));
colors.splice(index, numColors);

// Display updated array in browser
document.write("<h3>After deleting color(s) at specific index:</h3>");
document.write(colors + "<br>");

// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.
var studentScores = [12, 55, 23, 89, 11, 13, 56, 90, 10, 44];
document.write(`${studentScores.sort()} <br>`);

// // 11. Write a program to initialize an array with city names Copy 3 array elements from cities array to selectedCities

var cityNames = ["Karachi", "Lahore", "Islamabad", "Multan"];
document.write(`${cityNames.slice(0, 2)}`);

// // 12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)
document.write("<br>" + "<br>" + "Question 12" + "<br>" + "<br>");

var arr = ["This ", "is ", "my ", "cat"];
document.write("my original array = " + arr + "<br>");
document.write("after join method = " + arr.join(""));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
document.write("<br>" + "<br>" + "Question 13" + "<br>" + "<br>");
var fifoArray = ["first", "second", "third"];

// fifoArray.push("first element");
// fifoArray.push("second element");
// fifoArray.push("third element");

document.write(fifoArray + "<br>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray + "<br>");

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-
// First Out)
document.write("<br>" + "<br>" + "Question 14" + "<br>" + "<br>");
const newArr = ["hania ", "malaika ", "afza "];
// newArr.push("hania");
// newArr.push("malaika");
// newArr.push("afza");
document.write("my array =  " + newArr + "<br>");
document.write(newArr.pop() + "<br>");
document.write(newArr + "<br>");

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
document.write("<br>" + "<br>" + "Question 15" + "<br>" + "<br>");

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
