/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 23 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Avoid Mutations and Side Effects Using Functional Programming
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Fill in the code for the function incrementer so it returns the value of the global 
// variable fixedValue increased by one.


// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line

  return fixedValue + 1;

  // Only change code above this line
}

console.log("A: Global var: fixedValue: " + fixedValue + " EXPECT 4");
let res = incrementer(); 
console.log("B: value returned from incrementer is: " + res + " EXPECT 5");
console.log("C: Global var: fixedValue: " + fixedValue + " EXPECT 4");


// EOF
