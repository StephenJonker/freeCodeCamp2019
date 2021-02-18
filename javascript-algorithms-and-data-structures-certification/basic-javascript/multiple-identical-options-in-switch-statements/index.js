/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 18 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Multiple Identical Options in Switch Statements 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Write a switch statement to set answer for the following ranges:
// 1-3 - "Low"
// 4-6 - "Mid"
// 7-9 - "High"
//
// Note
// You will need to have a case statement for each number in the range.

function sequentialSizes(val) {
	var answer = "";
	// Only change code below this line
	
	switch (val) {
		case 1: 
		case 2: 
		case 3: 
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6: 
			answer = "Mid";
			break;
		case 7:
		case 8: 
		case 9: 
			answer = "High";
			break;
		default:
			answer = "Error: something went wrong, out of range";
	}
	// Only change code above this line
	return answer;
  }
  
var res = sequentialSizes(1); 
console.log("The value in variable res is: " + res);

res = sequentialSizes(5); 
console.log("The value in variable res is: " + res);

res = sequentialSizes(7); 
console.log("The value in variable res is: " + res);


// EOF
