/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 31 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Combine Two Arrays Using the concat Method
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Use the concat method in the nonMutatingConcat function to concatenate attach to the end 
// of original. The function should return the concatenated array.

function nonMutatingConcat(original, attach) {
	// Only change code below this line
  
	return original.concat(attach); 

	// Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
let res = nonMutatingConcat(first, second);

console.log("Value in res is: " + JSON.stringify(res) + " EXPECT: [1, 2, 3, 4, 5] "); 


// EOF
