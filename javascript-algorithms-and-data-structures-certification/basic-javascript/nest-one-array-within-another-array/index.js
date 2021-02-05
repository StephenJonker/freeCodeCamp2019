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
	- Task: Nest one Array within Another Array 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Create a nested array called myArray

// Only change code below this line
var myArray = [ 
		[ "Row1-Col1", "Row1-Col2" ], 
		[ "Row2-Col1", "Row2-Col2" ]
    ]; 

// console.log("The value in variable a is: " + a);

// tried access the array using 
// myArrays[0,0];
// Got unexpected results, but not an error 

console.log("Row 1 Col 1: " + myArray[0][0]);
console.log("Row 1 Col 2: " + myArray[0][1]);
console.log("Row 2 Col 1: " + myArray[1][0]);
console.log("Row 2 Col 2: " + myArray[1][1]);

// EOF
