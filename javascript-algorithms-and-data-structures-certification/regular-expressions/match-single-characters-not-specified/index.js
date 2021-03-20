/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 20 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Match Single Characters Not Specified
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Create a single regex that matches all characters that are not a 
// number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou1234567890]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log("Value in result is: " + result);

// EOF
