/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 27 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Reuse Patterns Using Capture Groups
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Use capture groups in reRegex to match a string that consists of only the same 
// number repeated exactly three times separated by single spaces.

let repeatNum = "42 42 42";
let reRegex = /^(\d{2,})\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
let result2 = repeatNum.match(reRegex);

// Using the .match() method on a string will return an array with the 
// string it matches, along with its capture group.

console.log("The value in variable result is: " + result + " Expect true ");
console.log("The value in variable result2 is: " + result2 + " Expect <tbd> ");

// EOF
