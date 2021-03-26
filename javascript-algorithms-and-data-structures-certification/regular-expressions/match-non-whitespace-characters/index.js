/*
	Javascript file

	Written by: Stephen Jonker
	Written on: The 25 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Match Non-Whitespace Characters
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/gi; // Change this line
let result = sample.match(countNonWhiteSpace);


console.log("The value in variable result is: " + result);
console.log("The length of result is: " + result.length + " Expect 38");

// EOF
