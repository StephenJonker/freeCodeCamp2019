/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 29 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Check if an Object has a Property
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We've created an object, users, with some users in it and a function isEveryoneHere, 
// which we pass the users object to as an argument. Finish writing this function so that 
// it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and 
// Ryan, as keys, and false otherwise.

let users = {
	Alan: {
	  age: 27,
	  online: true
	},
	Jeff: {
	  age: 32,
	  online: true
	},
	Sarah: {
	  age: 48,
	  online: true
	},
	Ryan: {
	  age: 19,
	  online: true
	}
};
  
function isEveryoneHere(obj) {
	// Only change code below this line
	
	if ( 
		users.hasOwnProperty('Alan') &&
		users.hasOwnProperty('Jeff') &&
		users.hasOwnProperty('Sarah') &&
		users.hasOwnProperty('Ryan')
	  ) {
		return true;
	  } else {
		return false; 
	  }
	
	// Only change code above this line
}
  
console.log(isEveryoneHere(users));

// EOF
