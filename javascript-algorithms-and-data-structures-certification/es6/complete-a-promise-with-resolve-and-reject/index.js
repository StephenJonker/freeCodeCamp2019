/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 12 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Complete a Promise with resolve and reject
	- NOTE: This code works in Node.js and appears to be different than what would work in Browser Javascript
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Make the promise handle success and failure. If responseFromServer 
// is true, call the resolve method to successfully complete the promise. 
// Pass resolve a string with the value We got the data. If 
// responseFromServer is false, use the reject method instead and 
// pass it the string: Data not received.

const makeServerRequest = new Promise((resolve, reject) => {
	// responseFromServer represents a response from a server
	let responseFromServer = false;
	  
	if(responseFromServer) {
	  resolve("We got the data");
	} else {  
	  reject("Data not received");
	}
  });

// The next section is "probably" the correct syntax for a "promise" when executed in a browser
// the syntax for promises in Node.js seems different
// see the next code block for the Node.js version 
// 

// makeServerRequest( 
// 	(message) => { 
// 		console.log("Promise RESOLVE output: " + message);
// 		}, 
// 	(message) => { 
// 		console.log("Promise REJECT output: " + message);
// 	}
// );

// Node.js version of a promise
// 
makeServerRequest.then( 
	(message) => { 
		console.log("Promise RESOLVE output: " + message);
		}, 
	(message) => { 
		console.log("Promise REJECT output: " + message);
	}
);

// let res = "<tbd>"; 
// console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
