/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 2 Api 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Copy Array Items Using slice
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We have defined a function, forecast, that takes an array as an argument. 
// Modify the function using slice() to extract information from the argument 
// array and return a new array that contains the string elements warm and sunny.

// Leaves original array unmodified, just returns array elements from 
// startIndex to endIndex (but not including endIndex)
// 
// array.slice(startIndex, endIndex); 

function forecast(arr) {
	// Only change code below this line
	let result = arr.slice(2,4);
	return result;
}
  
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// EOF
