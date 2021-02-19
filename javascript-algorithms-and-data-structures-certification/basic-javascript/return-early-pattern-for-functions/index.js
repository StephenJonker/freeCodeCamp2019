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
	- Task: Return Early Pattern for Functions 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Modify the function abTest so that if a or b are less than 0 
// the function will immediately exit with a value of undefined.
//
// Hint
// Remember that undefined is a keyword, not a string.

// Setup
function abTest(a, b) {
	// Only change code below this line
  
	if ( a < 0 || b < 0 ) return undefined;
  
	// Only change code above this line
  
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
var res = abTest(2,2);
console.log("The value in variable res is: " + res);

res = abTest(-1,2);
console.log("The value in variable res is: " + res);

res = abTest(2,-2);
console.log("The value in variable res is: " + res);

// EOF
