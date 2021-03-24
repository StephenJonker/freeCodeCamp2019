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
	- Task: Match Everything But Letters and Numbers
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// <tbd>

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

let res = "<tbd>"; 
console.log("The value in variable result is: " + result + " Expect 6");
console.log("Match the 5 space characters and 1 period character");
console.log("String is: " + quoteSample);

// EOF
