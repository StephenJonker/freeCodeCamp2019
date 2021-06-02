/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 1 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Add Elements to the End of an Array Using concat Instead of push
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// <tbd>

function nonMutatingPush(original, newItem) {
	// Only change code below this line
	// return original.push(newItem);
  
	return original.concat(newItem);

	// Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
let res = nonMutatingPush(first, second);

console.log("Value in res is: " + JSON.stringify(res) + " EXPECT: [1, 2, 3, 4, 5]");

// EOF
