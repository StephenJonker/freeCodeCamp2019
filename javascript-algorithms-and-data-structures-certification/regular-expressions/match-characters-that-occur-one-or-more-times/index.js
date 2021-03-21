/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 21 March 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Match Characters that Occur One or More Times
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// You want to find matches when the letter s occurs one or more times 
// in Mississippi. Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

console.log("Value in result is: " + result + " Expect ss,ss");

// EOF
