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
	- Task: Accessing Nested Arrays 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Retrieve the second tree from the variable myPlants using object dot and array bracket notation.

// Setup
var myPlants = [
	{
	  type: "flowers",
	  list: [
		"rose",
		"tulip",
		"dandelion"
	  ]
	},
	{
	  type: "trees",
	  list: [
		"fir",
		"pine",
		"birch"
	  ]
	}
  ];
  
  // Only change code below this line
  
var secondTree = myPlants[1].list[1]; // Change this line 
console.log("The value in variable secondTree is: " + secondTree + " Expect pine ");


// EOF
