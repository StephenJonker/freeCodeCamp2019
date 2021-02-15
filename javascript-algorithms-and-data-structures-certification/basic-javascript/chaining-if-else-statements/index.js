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
	- Task: Chaining If Else Statements 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Write chained if/else if statements to fulfill the following conditions:
//
// num < 5 - return "Tiny"
// num < 10 - return "Small"
// num < 15 - return "Medium"
// num < 20 - return "Large"
// num >= 20 - return "Huge"

function testSize(num) {
	// Only change code below this line
	if ( num < 5 ) { 
		return "Tiny";
	} else if ( num < 10 ) { 
		return "Small";
	} else if ( num < 15 ) { 
		return "Medium";
	} else if ( num < 20 ) { 
		return "Large";
	} else { 
		return "Huge"; 
	}
  	// Only change code above this line
  }
  
var res = testSize(7); 
console.log("The value in variable res is: " + res + " ==>> Expect Small");

// EOF
