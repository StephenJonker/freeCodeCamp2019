/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 19 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Confirm the Ending
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Check if a string (first argument, str) ends with the given target 
// string (second argument, target).
// Note: the length of target can be greater than 1
// Return true | false 

function confirmEnding(str, target) {
	let result = false;
	
	let lenStr = str.length;
	let lenTarget = target.length;
	let startPos = lenStr - lenTarget; 

	let lastCharsInString = str.substring(startPos, lenStr);
	
	if ( lastCharsInString == target ) {
		result = true;
	} else {
		result = false;
	}

	return result;
}
  
let res = confirmEnding("Bastian", "n");
console.log("result is " + res + " Expect true");

// EOF
