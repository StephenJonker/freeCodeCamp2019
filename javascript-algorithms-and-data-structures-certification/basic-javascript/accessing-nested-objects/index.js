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
	- Task: Accessing Nested Objects
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Access the myStorage object and assign the contents of the glove 
// box property to the gloveBoxContents variable. Use dot notation 
// for all properties where possible, otherwise use bracket notation.

// Setup
var myStorage = {
	"car": {
	  "inside": {
		"glove box": "maps",
		"passenger seat": "crumbs"
	   },
	  "outside": {
		"trunk": "jack"
	  }
	}
  };

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line 
console.log("The value in variable gloveBoxContents is: " + gloveBoxContents);



// EOF
