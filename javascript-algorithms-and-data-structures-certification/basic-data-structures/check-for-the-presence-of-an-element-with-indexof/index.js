/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 5 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Check For The Presence of an Element With indexOf
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// indexOf() can be incredibly useful for quickly checking for the presence of an 
// element on an array. We have defined a function, quickCheck, that takes an array 
// and an element as arguments. Modify the function using indexOf() so that it 
// returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
	// Only change code below this line
	let result = arr.indexOf(elem);
	if (result == -1) {
		return false;
	} else {
		return true; 
	}
	// Only change code above this line
}
  
// Should return false
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms') + " Expect false");

// Should return true
console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions') + " Expect true");

// EOF
