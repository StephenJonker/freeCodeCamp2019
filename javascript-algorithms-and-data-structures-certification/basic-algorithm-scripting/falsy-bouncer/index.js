/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 24 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Falsy Bouncer
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
// return the contents of the original array with falsy values removed 

function bouncer(arr) {
	let result = [];

	for (let index in arr ) { 
		let arrayItem = arr[ index ];
		if ( Boolean(arrayItem) == true ) {
			result.push(arrayItem);
		}
	}

	return result;
}
  
let res = bouncer([7, "ate", "", false, 9]);
console.log("The value in variable res is: " + JSON.stringify(res) + " EXPECT: [7,\"ate\",9] ");

// EOF
