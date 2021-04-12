/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 12 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Generate an Array of All Object Keys with Object.keys
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// Finish writing the getArrayOfUsers function so that it returns an 
// array containing all the properties in the object it receives as an argument.

let users = {
	Alan: {
	  age: 27,
	  online: false
	},
	Jeff: {
	  age: 32,
	  online: true
	},
	Sarah: {
	  age: 48,
	  online: false
	},
	Ryan: {
	  age: 19,
	  online: true
	}
};
  
function getArrayOfUsers(obj) {
	// Only change code below this line
	let result = [];
	result = Object.keys(obj);
	return result;
	// Only change code above this line
}
  
console.log(getArrayOfUsers(users));

// EOF
