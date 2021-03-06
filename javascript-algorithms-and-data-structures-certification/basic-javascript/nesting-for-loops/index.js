/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 21 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Nesting for Loops
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
	var product = 1;
	// Only change code below this line
  
	for (let row = 0; row < arr.length; row++) {
		for ( let rowElement = 0; rowElement < arr[row].length; rowElement++) {
			product = product * arr[row][rowElement];
		}
	}
	// Only change code above this line
	return product;
  }
  
var res = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log("Final product of array elements is: " + res + " Expect 5040");

// EOF
