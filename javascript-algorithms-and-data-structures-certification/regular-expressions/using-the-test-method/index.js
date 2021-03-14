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
	- Task: Using the Test Method
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Apply the regex myRegex on the string myString using the .test() method.

// Original code
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex; // Change this line

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // results should have value of true

if (result) {
	console.log("The string: " + myString + " matches the REGEX: " + myRegex + " Result is: " + result);
} else {
	console.log("NO MATCH for Regex");
}

// let res = "<tbd>"; 
// console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
