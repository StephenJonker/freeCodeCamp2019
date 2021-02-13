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
	- Task: Initializing Variables with the Assignment Operator 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");
// Goal: 
// Create an if statement inside the function to return "Yes, that was true" 
// if the parameter wasThatTrue is true and return "No, that was false" otherwise.

function trueOrFalse(wasThatTrue) {
	// Only change code below this line
	if ( wasThatTrue ) {
		return "Yes, that was true";
	  }
	  return "No, that was false";
    
	// Only change code above this line

  } 

var res = trueOrFalse(true); 
console.log("Functino called with TRUE - Variable res is: " + res);

var res = trueOrFalse(false); 
console.log("Functino called with FALSE - Variable res is: " + res);

// EOF
