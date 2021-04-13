/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 13 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Modify an Array Stored in an Object
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// Take a look at the object we've provided in the code editor. The user object 
// contains three keys. The data key contains five keys, one of which contains 
// an array of friends. From this, you can see how flexible objects are as data 
// structures. We've started writing a function addFriend. Finish writing it so 
// that it takes a user object and adds the name of the friend argument to the 
// array stored in user.data.friends and returns that array.

let user = {
	name: 'Kenneth',
	age: 28,
	data: {
	  username: 'kennethCodesAllDay',
	  joinDate: 'March 26, 2016',
	  organization: 'freeCodeCamp',
	  friends: [
		'Sam',
		'Kira',
		'Tomo'
	  ],
	  location: {
		city: 'San Francisco',
		state: 'CA',
		country: 'USA'
	  }
	}
  };
  
function addFriend(userObj, friend) {
	// Only change code below this line
	let result = {};

	userObj.data.friends.push(friend); 

	result = userObj.data.friends;
	return result;
	// Only change code above this line
}
  
console.log(addFriend(user, 'Pete'));
console.log("Expect friends to contain: 'Pete'");

// EOF
