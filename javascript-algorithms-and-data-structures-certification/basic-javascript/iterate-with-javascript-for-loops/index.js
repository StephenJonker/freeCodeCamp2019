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
	- Task: Iterate with JavaScript For Loops 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Use a for loop to work to push the values 1 through 5 onto myArray.

var myArray = [];

for ( let index = 1; index <= 5; index++ ) { 
	myArray.push(index); 
}

console.log("The value of myArray is: " + myArray + " Expect 1,2,3,4,5");

// EOF
