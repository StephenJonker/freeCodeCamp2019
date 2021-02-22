/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 21 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Generate Random Whole Numbers with JavaScript 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Use this technique to generate and return a random whole number between 0 and 9

function randomWholeNum() {

	// Only change code below this line
  
	return Math.floor(Math.random() * 10);
  }

var res = randomWholeNum();
console.log("The Value of res is: " + res );

// EOF
