/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 6 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Add Key Value Pairs to JavaScript Objects
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// A foods object has been created with three entries. Using the syntax of your choice, 
// add three more entries to it: bananas with a value of 13, grapes with a value of 35, 
// and strawberries with a value of 27.

let foods = {
	apples: 25,
	oranges: 32,
	plums: 28
};
  
// Only change code below this line
foods['bananas'] = 13;
foods['grapes'] = 35; 
foods['strawberries'] = 27;
// Only change code above this line

console.log(foods);

// EOF
