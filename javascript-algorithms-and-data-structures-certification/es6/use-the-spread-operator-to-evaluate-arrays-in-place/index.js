/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 26 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use the Spread Operator to Evaluate Arrays In-Place
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

console.log("BEFORE: Content of arr2 is: " + arr2);

arr2 = [...arr1];  // Change this line

console.log("AFTER: Content of arr2 is: " + arr2);

// EOF
