/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 25 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Match All Non-Numbers
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Use the shorthand character class for non-digits \D to 
// count how many non-digits are in movie titles.
//
// Added a commet, GitHub does not seem to be updating 

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

console.log("The value in variable result is: " + result + " Expect 17 ");

// EOF
