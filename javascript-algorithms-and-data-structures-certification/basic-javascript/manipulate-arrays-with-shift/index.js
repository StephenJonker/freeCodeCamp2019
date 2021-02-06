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
	- Task: Manipulate Arrays With shift 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Use the .shift() function to remove the first item 
// from myArray, assigning the "shifted off" value to removedFromMyArray.

// Setup
var myArray = [["John", 23], ["dog", 3]];
var myArrayOriginal = myArray.slice();

// Only change code below this line
var removedFromMyArray = myArray.shift(); 

console.log("The value in variable myArray is: " + myArray);
console.log("The value in variable removedFromMyArray is: " + removedFromMyArray);
console.log("The value in variable myArrayOriginal is: " + myArrayOriginal);

// EOF
