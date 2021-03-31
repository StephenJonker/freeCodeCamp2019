/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 30 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Remove Items from an Array with pop and shift
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We have defined a function, popShift, which takes an array as an 
// argument and returns a new array. Modify the function, using pop() and 
// shift(), to remove the first and last elements of the argument array, and 
// assign the removed elements to their corresponding variables, so that the 
// returned array contains their values.

function popShift(arr) {
	let popped = arr.pop(); // Change this line
	let shifted = arr.shift(); // Change this line
	return [shifted, popped];
  }
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// EOF
