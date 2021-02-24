/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 23 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use Arrow Functions to Write Concise Anonymous Functions
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Rewrite the function assigned to the variable magic 
// which returns a new Date() to use arrow function syntax. 
// Also, make sure nothing is defined using the keyword var.

let magic = () => {
	return new Date();
  };

let res = magic(); 
console.log("The value in variable res is: " + res + " Expect <the-current-date-time> ");

// EOF
