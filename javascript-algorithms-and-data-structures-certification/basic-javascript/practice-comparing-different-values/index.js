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
	- Task: Practice comparing different values 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// The compareEquality function in the editor compares two values 
// using the equality operator. Modify the function so that it 
// returns "Equal" only when the values are strictly equal.

// Setup
function compareEquality(a, b) {
	if (a === b) { // Change this line
	  return "Equal";
	}
	return "Not Equal";
  }
  
var result = compareEquality(10, "10");

console.log("The value in variable result is: " + result + " Expect \"Not Equal\" ");

// EOF
