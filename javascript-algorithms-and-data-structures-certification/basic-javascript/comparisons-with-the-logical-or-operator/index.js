/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 14 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Comparisons with the Logical Or Operator 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Combine the two if statements into one statement which 
// returns "Outside" if val is not between 10 and 20, inclusive. 
// Otherwise, return "Inside".

function testLogicalOr(val) {
	// Only change code below this line
  
	if (val < 10 || val > 20) {
	  return "Outside";
	}
  
	// Only change code above this line
	return "Inside";
  }
  
var res = testLogicalOr(15); 
console.log("The value in variable res is: " + res + " Expect: Inside");

var res = testLogicalOr(5); 
console.log("The value in variable res is: " + res + " Expect: Outside");

var res = testLogicalOr(30); 
console.log("The value in variable res is: " + res + " Expect: Outside");



// EOF
