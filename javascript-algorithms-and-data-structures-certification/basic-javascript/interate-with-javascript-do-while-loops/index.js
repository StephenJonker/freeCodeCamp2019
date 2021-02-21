/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 21 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Iterate with JavaScript Do...While Loops 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Change the while loop in the code to a do...while loop so the loop will 
// push only the number 10 to myArray, and i will be equal to 11 when your 
// code has finished running.

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
	myArray.push(i);
	i++;
} while (i < 11); 

console.log("The value of myArray is: " + myArray + " Expect [10]");

// EOF
