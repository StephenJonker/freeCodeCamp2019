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
	- Task: Access Multi-Dimensional Arrays With Indexes 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Using bracket notation select an element from myArray such that myData is equal to 8

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1]; 

console.log("The value in variable myData is: " + myData + " Expect 8");

// EOF
