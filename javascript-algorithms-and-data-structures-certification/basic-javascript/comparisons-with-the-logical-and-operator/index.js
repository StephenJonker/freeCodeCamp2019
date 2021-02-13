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
	- Task: Comparisons with the Logical And Operator
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Replace the two if statements with one statement, using the && operator, 
// which will return "Yes" if val is less than or equal to 50 and greater 
// than or equal to 25. Otherwise, will return "No".

function testLogicalAnd(val) {
	// Only change code below this line
  
	if ( val <= 50 && val >= 25) {
		return "Yes";
	}
	
	// Only change code above this line
	return "No";
  }
  
var res = testLogicalAnd(10); 
console.log("The value in variable res is: " + res + " Expect No");

var res = testLogicalAnd(55); 
console.log("The value in variable res is: " + res + " Expect No");

var res = testLogicalAnd(30); 
console.log("The value in variable res is: " + res + " Expect Yes");


// EOF
