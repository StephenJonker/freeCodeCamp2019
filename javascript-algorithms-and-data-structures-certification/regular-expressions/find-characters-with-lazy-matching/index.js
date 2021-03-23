/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 23 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Find Characters with Lazy Matching
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the 
// text "<h1>Winter is coming</h1>". Remember the wildcard . in a 
// regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

// Note: the "?" Regex makes the matching on the "*" lazy (minimum match) 

console.log("The value in variable result is: " + result + " Expect <h1>");

// EOF
