/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 16 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Ignore Case While Matching
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Write a regex fccRegex to match freeCodeCamp, no matter its case. 
// Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

if (result) {
	console.log("Regex match: for string \"freeCodeCamp\" ignoring case");
} else {
	console.log("Regex match: FAILED");
}

// EOF
