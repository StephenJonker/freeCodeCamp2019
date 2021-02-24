/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 23 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Prevent Object Mutation
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// In this challenge you are going to use Object.freeze 
// to prevent mathematical constants from changing. You need 
// to freeze the MATH_CONSTANTS object so that no one is able 
// to alter the value of PI, add, or delete properties.

function freezeObj() {
	const MATH_CONSTANTS = {
	  PI: 3.14
	};
	// Only change code below this line
  
	Object.freeze(MATH_CONSTANTS);
  
	// Only change code above this line
	try {
	  MATH_CONSTANTS.PI = 99;
	} catch(ex) {
	  console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

let res = PI; 
console.log("The value in variable res is: " + res + " Expect 3.14 ");

// EOF
