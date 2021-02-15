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
	- Task: Introducing Else If Statements 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Convert the logic to use else if statements.

function testElseIf(val) {
	if (val > 10) {
	  return "Greater than 10";
	} else if (val < 5) {
	  return "Smaller than 5";
	} else {
  		return "Between 5 and 10";
	}
  }
  
var res = testElseIf(7); 
console.log("The value in variable res is: " + res + " ==>> Expect Between 5 and 10");

res = testElseIf(15); 
console.log("The value in variable res is: " + res + " ==>> Expect Greater than 10");

res = testElseIf(2); 
console.log("The value in variable res is: " + res + " ==>> Expect Smaller than 5");

// EOF
