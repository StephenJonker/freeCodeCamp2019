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
	- Task: Catch Unclosed Parentheses Brackets Braces and Quotes
*/

console.log("FCC - Javascript and Algorithms - debugging");

// Goal: 
// Fix the two pair errors in the code.

// Original code 
//
// let myArray = [1, 2, 3;
// let arraySum = myArray.reduce((previous, current =>  previous + current);
// console.log(`Sum of array values is: ${arraySum}`);

// Fixed code 
//
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}` + " EXPECT: 6");

// EOF
