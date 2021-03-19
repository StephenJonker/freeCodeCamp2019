/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 19 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Match Letters of the Alphabet
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Match all the letters in the string quoteSample.
//
// Note: Be sure to match both uppercase and lowercase letters.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

console.log("Value in result: " + result);
console.log("Number of elements in result: " + result.length + " Expect 35");

// EOF
