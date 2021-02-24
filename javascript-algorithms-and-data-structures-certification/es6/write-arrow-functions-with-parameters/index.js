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
	- Task: Write Arrow Functions with Parameters
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Rewrite the myConcat function which appends 
// contents of arr2 to arr1 so that the function uses arrow function syntax.

// example given
//
var myConcat = function(arr1, arr2) {
	return arr1.concat(arr2);
  };
console.log("Version 1: " + myConcat([1, 2], [3, 4, 5]));

// Replacement with arrow functions
// 
const myConcat2 = (arr1, arr2) => arr1.concat(arr2); 
console.log("Version 2: " + myConcat2([1, 2], [3, 4, 5]) );

// let res = "<tbd>"; 
// console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
