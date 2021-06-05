/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 5 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Return a Sorted Array Without Changing the Original Array
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Use the sort method in the nonMutatingSort function to sort the elements of an 
// array in ascending order. The function should return a new array, and not 
// mutate the globalArray variable.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line

  let result = [...arr];
  return result.sort( (a,b) => a - b ); 

  // Only change code above this line
}
let result = nonMutatingSort(globalArray);
console.log("The value in variable result is: " + result + " Expect 2,3,5,6,9 ");

// EOF
