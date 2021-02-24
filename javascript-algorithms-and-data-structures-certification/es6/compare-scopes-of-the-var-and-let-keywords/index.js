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
	- Task: Compare Scopes of the var and let Keywords
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Fix the code so that i declared in the if statement is a 
// separate variable than i declared in the first line of the 
// function. Be certain not to use the var keyword anywhere in your code.

// This exercise is designed to illustrate the difference between 
// how var and let keywords assign scope to the declared variable. 
// When programming a function similar to the one used in this 
// exercise, it is often better to use different variable names 
// to avoid confusion.

function checkScope() {
	let i = 'function scope';
	if (true) {
	  let i = 'block scope';
	  console.log('Block scope i is: ', i);
	}
	console.log('Function scope i is: ', i);
	return i;
  }

let res = checkScope(); 
console.log("The value in variable res is: " + res + " Expect function scope ");

// EOF
