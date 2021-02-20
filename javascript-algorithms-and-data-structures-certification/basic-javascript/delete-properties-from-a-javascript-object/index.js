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
	- Task: Delete Properties from a JavaScript Object
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Delete the "tails" property from myDog. You may use either dot or bracket notation.

// Setup
var myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"],
	"bark": "woof"
  };
  
  // Only change code below this line

// Display contents of the object BEFORE the delete 
console.log("The myDog object BEFORE: \n" + JSON.stringify(myDog, null, 4));
delete myDog.tails;
console.log("===");
console.log("The myDog object AFTER: \n" + JSON.stringify(myDog, null, 4));


// EOF
