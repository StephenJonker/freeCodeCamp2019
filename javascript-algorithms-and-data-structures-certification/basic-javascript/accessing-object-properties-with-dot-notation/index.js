/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 19 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Accessing Object Properties with Dot Notation
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Read in the property values of testObj using dot notation. Set the 
// variable hatValue equal to the object's property hat and set the 
// variable shirtValue equal to the object's property shirt.

// Setup
var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line

console.log("The value in variable hatValue is: " + hatValue + " Expect ballcap");
console.log("The value in variable shirtValue is: " + shirtValue + " Expect jersey");


// EOF
