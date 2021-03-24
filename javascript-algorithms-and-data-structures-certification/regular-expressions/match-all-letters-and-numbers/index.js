/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 24 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Match All Letters and Numbers
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Use the shorthand character class \w to count the 
// number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log("The value in variable result is: " + result + " Expect 31 ");

// EOF
