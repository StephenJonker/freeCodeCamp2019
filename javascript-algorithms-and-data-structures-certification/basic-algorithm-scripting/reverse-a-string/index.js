/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 15 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Reverse a String
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
	let result = "";
	let length = str.length; 
	let char = "";

	for (let i = length - 1; i >= 0; i--) {
		char = str.substring(i,i+1);
		result = result + char;
	}
	return result;
}

let originalString = "hello";
let reversedString = reverseString(originalString);

console.log("Original string is: " + originalString);
console.log("Reversed string is: " + reversedString);

// EOF
