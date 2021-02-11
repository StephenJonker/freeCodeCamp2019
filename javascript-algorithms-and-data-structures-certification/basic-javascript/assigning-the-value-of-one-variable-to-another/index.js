/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 29 Jan 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - javascript and algorithms - basic javascript 
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Assigning the Value of One Variable to Another
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Call the processArg function with an argument of 7 and assign 
// its return value to the variable processed.

// Setup

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7); 

console.log("Value of processed is: " + processed + " Expect value of 2");

// EOF
