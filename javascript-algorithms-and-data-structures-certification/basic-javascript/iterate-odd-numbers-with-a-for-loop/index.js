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
	- Task: Iterate Odd Numbers With a For Loop 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Push the odd numbers from 1 through 9 to myArray using a for loop.

// Setup
var myArray = [];

// Only change code below this line
for ( let index = 1; index <= 9; index = index + 2) {
	myArray.push(index);
}

console.log("Value of array myArray is: " + myArray + " Expect 1,3,5,7,9");

// EOF
