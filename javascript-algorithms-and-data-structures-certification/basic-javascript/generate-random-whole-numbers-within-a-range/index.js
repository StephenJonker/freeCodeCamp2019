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
	- Task: Generate Random Whole Numbers within a Range 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Create a function called randomRange that takes a range myMin 
// and myMax and returns a random whole number that's greater than 
// or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
	// Only change code below this line
	
	var result = Math.floor( Math.random() * (myMax - myMin + 1) + myMin);
	return result; 
	// Only change code above this line
} 

var res = randomRange(10, 20);
console.log("The value in variable res is: " + res);

// EOF
