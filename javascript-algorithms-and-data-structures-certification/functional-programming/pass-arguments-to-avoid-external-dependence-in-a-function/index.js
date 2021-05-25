/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 25 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Pass Arguments to Avoid External Dependence in a Function
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// <tbd>

// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (number) {

  return number + 1;

  // Only change code above this line
}

console.log("BEFORE: Value in global variable fixedValue is: " + fixedValue);

let res = incrementer(fixedValue);
console.log("Value in res is: " + res);

console.log("AFTER: Value in global variable fixedValue is: " + fixedValue);

// EOF
