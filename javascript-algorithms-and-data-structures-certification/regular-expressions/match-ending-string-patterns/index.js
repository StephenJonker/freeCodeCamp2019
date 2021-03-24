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
	- Task: Match Ending String Patterns
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Use the anchor character ($) to match the string caboose at the end of the string caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);


console.log("The value in variable result is: " + result + " Expect <tbd> ");

// EOF
