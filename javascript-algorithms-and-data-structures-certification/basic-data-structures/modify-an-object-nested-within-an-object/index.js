/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 7 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Modify an Object Nested Within an Object
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// Here we've defined an object userActivity, which includes another 
// object nested within it. Set the value of the online key to 45.

let userActivity = {
	id: 23894201352,
	date: 'January 1, 2017',
	data: {
	  totalUsers: 51,
	  online: 42
	}
  };
  
// Only change code below this line
userActivity.data.online = 45; 
// Only change code above this line
  
console.log(userActivity);
if ( userActivity.data.online == 45 ) {
	console.log("Success");
} else { 
	console.log("Not so successful");
}


// EOF
