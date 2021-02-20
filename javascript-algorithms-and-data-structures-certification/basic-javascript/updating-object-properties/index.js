/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 20 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Updating Object Properties 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Update the myDog object's name property. Let's change her name 
// from "Coder" to "Happy Coder". You can use either dot or bracket notation.

// Setup
var myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name = "Happy Coder"; 

console.log("The value in variable myDog.name is: " + myDog.name + " Expect Happy Coder");

// EOF
