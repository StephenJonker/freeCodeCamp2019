/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 23 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Mutate an Array Declared with const
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// An array is declared as const s = [5, 7, 2]. Change 
// the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

	return s;
  // Only change code above this line
}

let res = editInPlace(); 
console.log("The value in variable res is: " + res + " Expect 2, 5, 7 ");

// EOF
