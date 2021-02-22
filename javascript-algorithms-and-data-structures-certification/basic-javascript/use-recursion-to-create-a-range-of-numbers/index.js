/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 22 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Use Recursion to Create a Range of Numbers
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// We have defined a function named rangeOfNumbers with two parameters. 
// The function should return an array of integers which begins with a 
// number represented by the startNum parameter and ends with a number 
// represented by the endNum parameter. The starting number will always 
// be less than or equal to the ending number. Your function must use 
// recursion by calling itself and not use loops of any kind. It should 
// also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
	if ( startNum == endNum + 1) {
		return [];
	} else {
		var theArray = rangeOfNumbers(startNum + 1, endNum);
		theArray.unshift(startNum);
		return theArray;
	}
}; 

var res = rangeOfNumbers(4,9);
console.log("The value in variable res is: " + res);

res = rangeOfNumbers(5,5);
console.log("The value in variable res is: " + res);

// EOF
