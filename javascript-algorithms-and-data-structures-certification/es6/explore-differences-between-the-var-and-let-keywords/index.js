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
	- Task: Explore Differences Between the var and let Keywords

*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Update the code so it only uses the let keyword.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
	return quote;
}


let res = catTalk();
console.log("The value in variable res is: " + res + " Expect Oliver says Meow! ");

// EOF
