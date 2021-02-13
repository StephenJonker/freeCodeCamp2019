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
	- Task: Comparison with the Less Than Or Equal To Operator 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Add the less than or equal to operator to the indicated 
// lines so that the return statements make sense.

function testLessOrEqual(val) {
	if (val <= 12) {  // Change this line
	  return "Smaller Than or Equal to 12";
	}
  
	if (val <= 24) {  // Change this line
	  return "Smaller Than or Equal to 24";
	}
  
	return "More Than 24";
  }

var res = testLessOrEqual(11); 
console.log("The value in variable res is: " + res + " Expect Smaller Than or Equal to 12");

res = testLessOrEqual(23); 
console.log("The value in variable res is: " + res + " Expect Smaller Than or Equal to 24");

res = testLessOrEqual(25); 
console.log("The value in variable res is: " + res + " Expect More Than 24");


// EOF
