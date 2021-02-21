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
	- Task: Count Backwards With a For Loop 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Push the odd numbers from 9 through 1 to myArray using a for loop. 

var myArray = [];
for ( let index = 9; index >= 1; index = index - 2 ) {
	myArray.push(index);
}
console.log("Value of array myArray is: " + myArray + " Expect 9,7,5,3,1");

// EOF
