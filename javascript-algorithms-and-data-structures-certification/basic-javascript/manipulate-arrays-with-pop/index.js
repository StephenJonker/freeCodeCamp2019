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
	- Task: Manipulate Arrays With pop() 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Use the .pop() function to remove the last item from myArray, 
// assigning the "popped off" value to removedFromMyArray. 

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();

console.log("The value in variable myArray is: " + myArray);
console.log("The value in variable removedFromMyArray is: " + removedFromMyArray);

// EOF
