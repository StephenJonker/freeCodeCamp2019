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
	- Task: Accessing Object Properties with Bracket Notation
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Read the values of the properties "an entree" and "the drink" of 
// testObj using bracket notation and assign them to entreeValue and 
// drinkValue respectively.

// Setup
var testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
  };
  
  // Only change code below this line
  
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    // Change this line

console.log("The value in variable entreeValue is: " + entreeValue + " Expect hamburger");
console.log("The value in variable drinkValue is: " + drinkValue + " Expect water");

// EOF
