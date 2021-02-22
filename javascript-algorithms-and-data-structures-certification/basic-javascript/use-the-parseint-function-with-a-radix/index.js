/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 21 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Use the parseInt Function with a Radix 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Define a variable a with var and initialize it to a value of 9.

function convertToInteger(str) {
	return parseInt(str, 2);
}

var res = convertToInteger("10011"); 

console.log("The value in variable res is: " + res);

// EOF
