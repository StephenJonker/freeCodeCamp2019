/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 4 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Use Higher-Order Functions map filter or reduce to Solve a Complex Problem
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Complete the code for the squareList function using any combination of map(), 
// filter(), and reduce(). The function should return a new array containing the 
// squares of only the positive integers (decimal numbers are not integers) when 
// an array of real numbers is passed to it. An example of an array of real 
// numbers is [-3, 4.8, 5, 3, -3.2].
//
// Note: Your function should not use any kind of for or while loops or the forEach() function.

const squareList = arr => {
	// Only change code below this line

	// Version #1: 
	// more verbose, better comments, more readable
	
	// filter for positive values 
	// 
	// let n1 = arr.filter( item => item > 0) ;

	// filter for interger values 
	// 
	// let n2 = n1.filter( item => item == Math.trunc(item) );

	// use map to square the remaining values 
	// 
	// let result = n2.map( item => item * item);

	// Version #2: 
	// More compact than what is above, but not as readable or maintainable
	// 
	let result = arr.filter( function(item) { return item > 0 } )
		.filter( function(item) { return item == Math.trunc(item) } )  
		.map( function(item) { return item * item} );
	return result;

	// Only change code above this line
};
  
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



// EOF
