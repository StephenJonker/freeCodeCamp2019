/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 16 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Understand the Immediately Invoked Function Expression IIFE
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Rewrite the function makeNest and remove its call so instead it's an anonymous 
// immediately invoked function expression (IIFE).
//
// Original version 
//
// function makeNest() {
// 	console.log("A cozy nest is ready");
// }
//
// makeNest();

// Basic format ( <anonymous function ) (); 
// first () defines the anonymous function 
// second () executes the previous anonymous function 
// 

(function () {
	console.log("A cozy nest is ready");
})();
  

// EOF
