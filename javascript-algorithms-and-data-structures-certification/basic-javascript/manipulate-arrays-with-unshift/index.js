/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 06 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Manipulate Arrays With unshift 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Add ["Paul",35] to the beginning of the myArray variable using unshift().

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line 
myArray.unshift( ["Paul",35] );

console.log("The value in variable myArray is: " + myArray);

// EOF
