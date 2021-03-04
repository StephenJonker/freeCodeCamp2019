/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 3 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use Destructuring Assignment to Pass an Object as a Function's Parameters
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Use destructuring assignment within the argument 
// to the function half to send only max and min inside the function.

const stats = {
	max: 56.78,
	standard_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
  };
  
  // Only change code below this line
  const half = ({max,min}) => (max + min) / 2.0; 
  // Only change code above this line

let res = half(stats);
console.log("The value in variable res is: " + res + " Expect 28.015 ");

// EOF
