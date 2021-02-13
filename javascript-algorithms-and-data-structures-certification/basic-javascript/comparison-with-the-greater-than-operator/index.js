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
	- Task: Comparison with the Greater Than Operator
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Add the greater than operator to the indicated lines so that 
// the return statements make sense.

function testGreaterThan(val) {
	if (val > 100) {  // Change this line
	  return "Over 100";
	}
  
	if (val > 10) {  // Change this line
	  return "Over 10";
	}
  
	return "10 or Under";
  }
  
var result = testGreaterThan(110);
console.log("The value in variable result is: " + result + " Expect over 100");

var result = testGreaterThan(11);
console.log("The value in variable result is: " + result + " Expect over 10");

var result = testGreaterThan(9);
console.log("The value in variable result is: " + result + " 10 or under");

// EOF
