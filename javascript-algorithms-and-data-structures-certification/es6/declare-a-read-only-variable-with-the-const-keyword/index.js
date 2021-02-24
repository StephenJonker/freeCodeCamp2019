/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 23 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Declare a Read-Only Variable with the const Keyword
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Change the code so that all variables are declared 
// using let or const. Use let when you want the variable 
// to change, and const when you want the variable to remain 
// constant. Also, rename variables declared with const to 
// conform to common practices, meaning constants should 
// be in all caps.

function printManyTimes(str) {

	// Only change code below this line
  
	const SENTENCE = str + " is cool!";
	for (let i = 0; i < str.length; i+=2) {
	  console.log(SENTENCE);
	}
  
	// Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");

// EOF
