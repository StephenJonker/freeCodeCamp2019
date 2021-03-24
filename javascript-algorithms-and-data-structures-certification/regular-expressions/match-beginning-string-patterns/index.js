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
	- Task: Match Beginning String Patterns
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Use the caret character in a regex to find Cal only in the 
// beginning of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log("The value in variable result is: " + result + " Expect true ");

// EOF
