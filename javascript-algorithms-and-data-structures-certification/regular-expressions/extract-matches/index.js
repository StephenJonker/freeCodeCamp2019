/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 17 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: 
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log("Value of result is: " + result);

// let res = "<tbd>"; 
// console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
