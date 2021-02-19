/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 18 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Returning Boolean Values from Functions 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
	// Only change code below this line
	// if (a < b) {
	//   return true;
	// } else {
	//   return false;
	// }

	return a < b;

	// Only change code above this line
  }
  
var res = isLess(10, 15);
console.log("The value in variable res is: " + res + " Expect true");

res = isLess(100, 15);
console.log("The value in variable res is: " + res + " Expect false");

// EOF
