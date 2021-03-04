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
	- Task: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Use destructuring assignment with the rest parameter to perform 
// an effective Array.prototype.slice() so that arr is a sub-array 
// of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log("Value in source array is: " + source);
console.log("Value in array arr is: " + arr);

// EOF
