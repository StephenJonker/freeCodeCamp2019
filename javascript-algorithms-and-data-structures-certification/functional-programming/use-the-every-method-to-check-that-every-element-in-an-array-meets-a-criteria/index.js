/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 9 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Use the every Method to Check that Every Element in an Array Meets a Criteria
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Use the every method inside the checkPositive function to check if 
// every element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
	// Only change code below this line
  
	let result = arr.every( function(item) {
	  return item > 0;
	});
	return result;
	// Only change code above this line
}
let result = checkPositive([1, 2, 3, -4, 5]);

console.log("The value in variable result is: " + result + " Expect false ");

// EOF
