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
	- Task: Comparison with the Less Than Operator 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
	if (val < 25) {  // Change this line
	  return "Under 25";
	}
  
	if (val < 55) {  // Change this line
	  return "Under 55";
	}
  
	return "55 or Over";
  }
  
var res = testLessThan(24); 
console.log("The value in variable res is: " + res + " Expect Under 25");

var res = testLessThan(54); 
console.log("The value in variable res is: " + res + " Expect Under 55");

var res = testLessThan(77); 
console.log("The value in variable res is: " + res + " Expect 55 and over");


// EOF
