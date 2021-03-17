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
	- Task: Match Single Character with Multiple Possibilities
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Use a character class with vowels (a, e, i, o, u) in your regex 
// vowelRegex to find all the vowels in the string quoteSample.
// 
// Note: Be sure to match both upper- and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[AaEeIiOoUu]/gi; // Change this line
let result = quoteSample.match(vowelRegex);

console.log("Value in result is: " + result); 

// EOF
