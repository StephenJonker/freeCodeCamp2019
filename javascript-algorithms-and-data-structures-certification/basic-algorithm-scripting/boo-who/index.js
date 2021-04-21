/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 21 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Boo who
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Check if a value is classified as a boolean primitive. Return true or false.
// 
// Boolean primitives are true and false.

function booWho(variable) {
	let result = false;

	if ( typeof(variable) == "boolean" ) {
		result = true;
	}

	return result;
}
  
let res = booWho(null);
console.log("The value in variable res is: " + res + " Expect false");

// EOF
