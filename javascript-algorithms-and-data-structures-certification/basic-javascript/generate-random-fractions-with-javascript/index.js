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
	- Task: Generate Random Fractions with JavaScript 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Change randomFraction to return a random number instead of returning 0.
// changed it to generat random number between 1 and 10 

function randomFraction() {

	// Only change code below this line
	var randomNumber = Math.round(Math.random() * 10 + 0.5);
	return randomNumber;
  
	// Only change code above this line
  } 

var res = randomFraction(); 
console.log("Value in res : " + res);

// EOF
