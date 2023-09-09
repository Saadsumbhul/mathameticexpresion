// chapter 6 to 9
// Question 1;
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser
 
let a = 10;
b = ++a
b = a++
b = a--
b = --a



// Question 2;
var a = 2;
var b = 1;
var result = (--a - --b + ++b + b--);

// --a is evaluated
// 1 - --b + ++b + b--

// --b is evaluated
// 1 - 0 + ++b + b--

// ++b is evaluated
// 1 - 0 + 1 + b--

// finally b-- is evaluated
// 1 - 0 + 1 + 1

// result will be
// 3



// QUESTION 3 AND 4;
// Create a variable to store the user's name
var name = "Saad";

// Prompt the user to enter their name and assign it to the variable
name = prompt("What is your name?");

// Display a greeting message with the user's name
alert("Hello, " + name + "!");




// question5
// Create a variable to store the user's number
var number = "";

// Prompt the user to enter a number and assign it to the variable
number = prompt("Enter a number");

// Convert the user's input to a number
number = Number(number);

// Check if the user's input is a valid number
if (isNaN(number)) {
  // If not, use 5 as the default number
  number = 5;
}
// Create a variable to store the multiplication table as a string
var table = "";

// Use a loop to generate the multiplication table from 1 to 10
for (var i = 1; i <= 10; i++) {
  // Append each line of the table to the string with a line break
  table += number + " x " + i + " = " + (number * i) + "\n";
}
// Display the multiplication table on the browser
document.write("<pre>" + table + "</pre>");






// question6(a,b,c,d,e)

// Create three variables to store the subjects name
var subject1 = "";
var subject2 = "";
var subject3 = "";

// Prompt the user to enter the first subject name and assign it to the variable
subject1 = prompt("Enter the first subject1 name");

// Prompt the user to enter the second subject name and assign it to the variable
subject2 = prompt("Enter the second subject2 name");

// Prompt the user to enter the third subject name and assign it to the variable
subject3 = prompt("Enter the third subject3 name");

// Create a variable to store the total marks for each subject
var totalMarks = 100;

// Create a variable to store the obtained marks for first subject
var obtainedMarks1 = "";

// Prompt the user to enter the obtained marks for first subject and assign it to the variable
obtainedMarks1 = prompt("Enter the obtained marks for " + subject1);

// Convert the user's input to a number
obtainedMarks1 = Number(obtainedMarks1);

// Create a variable to store the obtained marks for second subject
var obtainedMarks2 = "";

// Prompt the user to enter the obtained marks for second subject and assign it to the variable
obtainedMarks2 = prompt("Enter the obtained marks for " + subject2);

// Convert the user's input to a number
obtainedMarks2 = Number(obtainedMarks2);

// Create a variable to store the obtained marks for third subject
var obtainedMarks3 = "";

// Prompt the user to enter the obtained marks for third subject and assign it to the variable
obtainedMarks3 = prompt("Enter the obtained marks for " + subject3);

// Convert the user's input to a number
obtainedMarks3 = Number(obtainedMarks3);

// Calculate the total obtained marks by adding all three variables
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// Calculate the percentage by dividing the total obtained marks by 300 (the maximum possible marks) and multiplying by 100
var percentage = (totalObtainedMarks / 300) * 100;

// Display the subjects name, total marks, obtained marks, total obtained marks and percentage on the browser
document.write("The subjects are: " + subject1 + ", " + subject2 + ", and " + subject3 + ".<br>");
document.write("The total marks for each subject is: " + totalMarks + ".<br>");
document.write("The obtained marks for " + subject1 + " is: " + obtainedMarks1 + ".<br>");
document.write("The obtained marks for " + subject2 + " is: " + obtainedMarks2 + ".<br>");
document.write("The obtained marks for " + subject3 + " is: " + obtainedMarks3 + ".<br>");
document.write("The total obtained marks are: " + totalObtainedMarks + ".<br>");
document.write("The percentage is: " + percentage.toFixed(2) + "%.");
