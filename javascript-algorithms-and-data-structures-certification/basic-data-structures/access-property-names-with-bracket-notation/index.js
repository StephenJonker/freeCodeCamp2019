/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 8 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Access Property Names with Bracket Notation
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We've defined a function, checkInventory, which receives a scanned item as 
// an argument. Return the current value of the scannedItem key in the foods 
// object. You can assume that only valid keys will be provided as an argument 
// to checkInventory.

let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13,
	grapes: 35,
	strawberries: 27
  };
  
function checkInventory(scannedItem) {
	// Only change code below this line
	return foods[scannedItem];
	// Only change code above this line
}

console.log(checkInventory("apples"));
console.log("For Apples, expect 25");
// EOF
