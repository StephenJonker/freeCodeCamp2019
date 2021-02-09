/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 09 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Global vs Local Scope in Functions 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Define a variable a with var and initialize it to a value of 9.

// Setup
var outerWear = "T-Shirt";
var result = "";

function myOutfit() {
  // Only change code below this line

	// outerWear = "local to function"; // sets variable "outerWear" in the GLOBAL scope 
	var outerWear = "local to function"; // sets variable "outerWear" in the LOCAL function scope 

  // Only change code above this line
  return outerWear;
}

result = myOutfit(); 

console.log("value of result is: " + result);
console.log("The value in variable outerWear is: " + outerWear);


// EOF
