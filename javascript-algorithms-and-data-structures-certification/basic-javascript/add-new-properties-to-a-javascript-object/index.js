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
	- Task: Add New Properties to a JavaScript Object 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Add a "bark" property to myDog and set it to a dog sound, such as 
// "woof". You may use either dot or bracket notation.

// Setup
var myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
  };
  
// Only change code below this line
myDog.bark = "woof";
console.log("The value in variable myDog.bark is: " + myDog.bark + " Expect woof");

// EOF
