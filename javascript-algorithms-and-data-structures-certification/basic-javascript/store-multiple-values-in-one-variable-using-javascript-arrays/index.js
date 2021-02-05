/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 05 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Store Multiple Values in one Variable using JavaScript Arrays 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Modify the new array myArray so that it contains both a 
// string and a number (in that order).

// Only change code below this line
var myArray = ["This is a string", 12345]; 

// Display contents of the array
for (var i = 0; i < myArray.length; i++ ) {
	console.log("The value in variable myArray at [" + i + "] is: " + myArray[i]);
}


// EOF
