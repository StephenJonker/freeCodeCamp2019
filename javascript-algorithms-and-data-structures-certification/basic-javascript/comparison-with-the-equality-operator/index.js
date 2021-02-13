/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 13 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Comparison with the Equality Operator 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Add the equality operator to the indicated line so that the 
// function will return "Equal" when val is equivalent to 12.

// Setup
function testEqual(val) {
	if (val == 12) { // Change this line
	  return "Equal";
	}
	return "Not Equal";
  }
  
var result = testEqual(10); 
console.log("The value in variable result is: " + result + " Expect \"Not Equal\" ");

// EOF
