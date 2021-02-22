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
	- Task: Use the Conditional Ternary Operator
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Use the conditional operator in the checkEqual function to check 
// if two numbers are equal or not. The function should return either "Equal" or "Not Equal".

function checkEqual(a, b) {
	return (a == b) ? "Equal" : "Not Equal";
}

var res = checkEqual(1, 2);
console.log("The value in variable res is: " + res);

res = checkEqual(2, 2);
console.log("The value in variable res is: " + res);

// EOF
