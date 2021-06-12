/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 12 June 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Introduction to Currying and Partial Application
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// <tbd>

function add(x) {
	// Only change code below this line
  
	return function(y) {
	  return function(z) {
		return x + y + z;
	  };
	}
  
	// Only change code above this line
}
let result = add(10)(20)(30);

console.log("The value in variable result is: " + result + " Expect 60");

// EOF
