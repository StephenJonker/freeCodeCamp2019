/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 12 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Stand in Line 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
	// Only change code below this line
	
	arr.push(item);
	item = arr.shift();
	return item;
	// Only change code above this line
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));



// EOF
