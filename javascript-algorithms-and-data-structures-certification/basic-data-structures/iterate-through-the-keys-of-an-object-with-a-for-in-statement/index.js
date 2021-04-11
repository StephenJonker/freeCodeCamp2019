/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 11 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Iterate Through the Keys of an Object with a for in Statement
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We've defined a function countOnline which accepts one argument 
// (a users object). Use a for...in statement within this function to 
// loop through the users object passed into the function and return the 
// number of users whose online property is set to true. An example of a 
// users object which could be passed to countOnline is shown below. Each 
// user will have an online property with either a true or false value.

// {
// 	Alan: {
// 	  online: false
// 	},
// 	Jeff: {
// 	  online: true
// 	},
// 	Sarah: {
// 	  online: false
// 	}
// }

function countOnline(usersObj) {
	// Only change code below this line
	let result = 0;

	let countOfOnlineUsers = 0;
	let userStatus = false;

	for ( let user in usersObj) {
		userStatus = usersObj[user].online;
		if (userStatus == true) { 
			countOfOnlineUsers += 1;
		}
	}
	result = countOfOnlineUsers;

	return result;
	// Only change code above this line
}

let users = {
	Alan: {
		online: false
	},
	Jeff: {
		online: true
	},
	Sarah: {
		online: false
	}
}

console.log("Number of online users: " + countOnline(users));
console.log("Expect 1");

// EOF
