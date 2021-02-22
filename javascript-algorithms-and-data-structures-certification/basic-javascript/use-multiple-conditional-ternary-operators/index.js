/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 22 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Use Multiple Conditional Ternary Operators 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// In the checkSign function, use multiple conditional operators - 
// following the recommended format used in findGreaterOrEqual - to check 
// if a number is positive, negative or zero. The function should return 
// "positive", "negative" or "zero".

function checkSign(num) {
	return num == 0 ? "zero" 
	: num > 0 ? "positive" 
	: "negative";
}

var res = checkSign(10);
console.log("The value in variable res is: " + res + " Expect positive");

res = checkSign(0);
console.log("The value in variable res is: " + res + " Expect zero");

res = checkSign(-10);
console.log("The value in variable res is: " + res + " Expect negative");

// EOF
