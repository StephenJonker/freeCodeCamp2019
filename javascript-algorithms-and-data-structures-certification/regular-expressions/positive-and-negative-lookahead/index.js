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
	- Task: Positive and Negative Lookahead
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Use lookaheads in the pwRegex to match passwords that 
// are greater than 5 characters long, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);

console.log("The value in variable result is: " + result + " Expect false");

// EOF
