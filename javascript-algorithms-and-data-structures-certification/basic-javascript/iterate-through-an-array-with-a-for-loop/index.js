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
	- Task: Iterate Through an Array with a For Loop
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Declare and initialize a variable total to 0. Use a for 
// loop to add the value of each element of the myArr array to total.

 // Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for ( let index = 0; index < myArr.length; index++ ) {
	total = total + myArr[index];
}

console.log("Value of total is: " + total + " Expect total = 20");

// EOF
