/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 3 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use Destructuring Assignment to Assign Variables from Arrays
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Use destructuring assignment to swap the values of a and b 
// so that a receives the value stored in b, and b receives 
// the value stored in a.

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

console.log("Value in a is: " + a + " Expect 6");
console.log("Value in b is: " + b + " Expect 8");

// EOF
