/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 10 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Understanding Undefined Value returned from a Function 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Create a function addFive without any arguments. This function adds 5 to 
// the sum variable, but its returned value is undefined.

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
	sum = sum + 5;
}

// Only change code above this line

var res1 = addThree();
var res2 = addFive(); 

console.log("The Final value in variable sum is: " + sum + " Expect 8");
console.log("The Final value in variable res1 is: " + res1 + " Expect undefined");
console.log("The Final value in variable res2 is: " + res2 + " Expect undefined");

// can we test for the concept of "undefined" in a variable?

if ( res1 == undefined ) {
	console.log("YES: we can test for undefined in a variable"); 
}
console.log("Setting variable res1 to a value and test again");
res1 = 357;

if ( res1 != undefined ) {
	console.log("Now variable res1 has a value and is NOT undefined"); 
}


// EOF
