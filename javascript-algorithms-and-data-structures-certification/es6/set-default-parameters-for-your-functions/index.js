/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 24 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Set Default Parameters for Your Functions
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Modify the function increment by adding default 
// parameters so that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

let res = increment(5, 3);; 
console.log("[no default] The value in variable res is: " + res + " Expect 8");

res = increment(5);; 
console.log("[with default] The value in variable res is: " + res + " Expect 6");




// EOF
