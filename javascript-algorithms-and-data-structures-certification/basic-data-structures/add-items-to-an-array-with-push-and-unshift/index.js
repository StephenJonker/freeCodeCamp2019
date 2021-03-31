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
	- Task: add items to an array with push and unshift
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We have defined a function, mixedNumbers, which we are passing an 
// array as an argument. Modify the function by using push() and unshift() 
// to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 
// to the end so that the returned array contains representations of the 
// numbers 1-9 in order.

function mixedNumbers(arr) {
	// Only change code below this line
	
	arr.push(7);
	arr.push('VIII');
	arr.push(9);
	
	arr.unshift('three');
	arr.unshift(2);
	arr.unshift('I');
	
	// Only change code above this line
	return arr;
}
  
console.log(mixedNumbers(['IV', 5, 'six']));

// EOF
