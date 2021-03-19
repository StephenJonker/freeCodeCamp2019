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
	- Task: Match Numbers and Letters of the Alphabet
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Create a single regex that matches a range of letters between h and s, 
// and a range of numbers between 2 and 6. Remember to include the 
// appropriate flags in the regex.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log("Value in results is: " + result);

// EOF
