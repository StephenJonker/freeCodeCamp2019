/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 14 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Match Literal Strings
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

if (result) { 
	console.log("We found Waldo!");
} else { 
	console.log("Seems Waldo is missing!");
}

// EOF
