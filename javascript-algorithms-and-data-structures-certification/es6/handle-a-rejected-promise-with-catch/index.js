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
	- Task: Handle a Rejected Promise with catch
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Add the catch method to your promise. Use error 
// as the parameter of its callback function and log error to the console.

const makeServerRequest = new Promise((resolve, reject) => {
	// responseFromServer is set to false to represent an unsuccessful response from a server
	let responseFromServer = false;
	  
	if(responseFromServer) {
	  resolve("We got the data");
	} else {  
	  reject("Data not received");
	}
  });
  
  makeServerRequest.then(result => {
	console.log(result);
  }).catch( error => 
	console.log(error)
  );

// EOF
