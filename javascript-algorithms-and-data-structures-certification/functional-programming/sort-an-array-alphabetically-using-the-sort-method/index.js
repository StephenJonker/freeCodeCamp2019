/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 5 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Sort an Array Alphabetically using the sort Method
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

function alphabeticalOrder(arr) {
	// Only change code below this line
  
	return arr.sort(); 

	// Only change code above this line
}

let result = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log("The value in variable result is: " + JSON.stringify(result) + " Expect ["a","a","c","d","g","z"]");

// EOF
