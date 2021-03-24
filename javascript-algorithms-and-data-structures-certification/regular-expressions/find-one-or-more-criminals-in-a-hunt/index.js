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
	- Task: Find One or More Criminals in a Hunt
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Write a greedy regex that finds one or more criminals within 
// a group of other people. A criminal is represented by the capital letter C.
// Example string given here: "aaCCbbCCCddCCCC" 

let reCriminals = /C+/g; // Change this line
let theString = "aaCCbbCCCddCCCC";
let result = theString.match(reCriminals);

console.log("The value in variable result is: " + result + " Expect CC,CCC,CCCC ");

// EOF
