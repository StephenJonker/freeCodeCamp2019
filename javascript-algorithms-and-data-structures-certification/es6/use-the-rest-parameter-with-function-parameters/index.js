/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 25 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use the Rest Parameter with Function Parameters
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Modify the function sum using the rest parameter in 
// such a way that the function sum is able to take any 
// number of arguments and return their sum.

// const sum = (x, y, z) => {
// 	const args = [x, y, z];
// 	return args.reduce((a, b) => a + b, 0);
// }

const sum = (...args) => {
	return args.reduce((a, b) => a + b, 0);
}

let res = sum(1,2,3); 
console.log("The value in variable res is: " + res + " Expect 6 ");

// EOF
