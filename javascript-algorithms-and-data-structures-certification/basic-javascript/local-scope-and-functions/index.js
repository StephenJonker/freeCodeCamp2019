/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 08 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// The editor has two console.logs to help you see what is happening. 
// Check the console as you code to see how it changes. Declare a local 
// variable myVar inside myLocalScope and run the tests.
// Note: The console will still have 'ReferenceError: myVar is not defined', 
// but this will not cause the tests to fail.

function myLocalScope() {

	// Only change code below this line
	var myVar = 3;
	console.log('inside myLocalScope', myVar);
}
myLocalScope();
  
// Run and check the console
// myVar is not defined outside of myLocalScope
if (typeof(myVar) == "undefined") {
	console.log("Variable myVar is UNDEFINED");
} 

// console.log("The value in variable a is: " + a);

// EOF
