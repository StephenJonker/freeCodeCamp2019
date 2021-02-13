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
	- Task: Comparison with the Inequality Operator
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Add the inequality operator != in the if statement so that the 
// function will return "Not Equal" when val is not equivalent to 99

// Setup
function testNotEqual(val) {
	if (val != 99) { // Change this line
	  return "Not Equal";
	}
	return "Equal";
  }
  
var result = testNotEqual(10); 

console.log("The value in variable result is: " + result + " Expect Not Equal");

// EOF
