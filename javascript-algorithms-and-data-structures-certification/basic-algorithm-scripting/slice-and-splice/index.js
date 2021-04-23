/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 23 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Slice and Splice
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
	let result = [...arr2]; // create a true copy of arr2
	result.splice(n,0,...arr1); // use spread operator to add individual elements from arr1 
	return result;
}
  
let res = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log("The value in variable res is: " + JSON.stringify(res) + " Expect <tbd> ");


// EOF
