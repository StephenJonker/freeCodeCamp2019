/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 15 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Introducing Else Statements 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Combine the if statements into a single if/else statement.

function testElse(val) {
	var result = "";
	// Only change code below this line
  
	if (val > 5) {
	  result = "Bigger than 5";
	} else {
	  result = "5 or Smaller";
	}
  
	// Only change code above this line
	return result;
  }
  
var res = testElse(4); 
console.log("The value in variable res is: " + res + " ---> Expect : 5 or Smaller");

// EOF
