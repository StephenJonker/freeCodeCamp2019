/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 28 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - debugging  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: debugging 
	- Task: Catch Arguments Passed in the Wrong Order When Calling a Function
*/

console.log("FCC - Javascript and Algorithms - debugging");

// Goal: 
// The function raiseToPower raises a base to an exponent. Unfortunately, 
// it's not called properly - fix the code so the value of power is the expected 8.

// Original code
//
// function raiseToPower(b, e) {
// 	return Math.pow(b, e);
// }
//
// let base = 2;
// let exp = 3;
// let power = raiseToPower(exp, base);
// console.log(power);

// Fixed code 
//
function raiseToPower(b, e) {
	return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
console.log("Expect 8 in line above");

// EOF
