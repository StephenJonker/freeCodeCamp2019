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
	- Task: Comparison with the Greater Than Or Equal To Operator 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Add the greater than or equal to operator to the indicated 
// lines so that the return statements make sense.

function testGreaterOrEqual(val) {
	if (val >= 20) {  // Change this line
	  return "20 or Over";
	}
  
	if (val >= 10 ) {  // Change this line
	  return "10 or Over";
	}
  
	return "Less than 10";
  }
  
var res = testGreaterOrEqual(20);
console.log("The value in variable res is: " + res + " Expect 20 or over ");

var res = testGreaterOrEqual(10);
console.log("The value in variable res is: " + res + " Expect 10 or over ");

var res = testGreaterOrEqual(7);
console.log("The value in variable res is: " + res + " Expect less than 10");



// EOF
