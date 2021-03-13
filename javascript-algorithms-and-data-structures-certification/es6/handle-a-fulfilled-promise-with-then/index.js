/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 13 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Handle a Fulfilled Promise with then
	- Note: 
		- This example is very similar to the previouse example, which did more than the 
		  exersize required
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Add the then method to your promise. Use result 
// as the parameter of its callback function and log result to the console.

const makeServerRequest = new Promise((resolve, reject) => {
	// responseFromServer is set to true to represent a successful response from a server
	let responseFromServer = true;
	  
	if(responseFromServer) {
	  resolve("We got the data");
	} else {  
	  reject("Data not received");
	}
  });

makeServerRequest.then ( (result) => {
	console.log(result);
}, (result) => {
	console.log(result);
}


)


let res = "<tbd>"; 
console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
