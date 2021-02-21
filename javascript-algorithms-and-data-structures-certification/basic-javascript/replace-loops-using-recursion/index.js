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
	- Task: Replace Loops using Recursion 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Write a recursive function, sum(arr, n), that returns the sum 
// of the first n elements of an array arr.

function sum(arr, n) {
	// Only change code below this line
	if ( n == 0 ) {
		return 0; 
	} else { 
		return arr[n - 1] + sum(arr, n - 1) ;
	}
	// Only change code above this line
}

var res = sum([1], 0);
console.log("Value of res is: " + res + " Expect 0 "); 

res = sum([2, 3, 4], 1);
console.log("Value of res is: " + res + " Expect 2 ");

res = sum([2, 3, 4, 5], 3); 
console.log("Value of res is: " + res + " Expect 9 ");

// EOF
