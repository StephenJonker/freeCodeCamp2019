/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 6 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Iterate Through All an Arrays Items Using For Loops
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We have defined a function, filteredArray, which takes arr, a nested array, 
// and elem as arguments, and returns a new array. elem represents an element that 
// may or may not be present on one or more of the arrays nested within arr. Modify the 
// function, using a for loop, to return a filtered version of the passed array such that 
// any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
	let newArr = [];
	// Only change code below this line
	let arrayLength = arr.length;
	for (let i = 0; i < arrayLength; i++ ) {
		if ( arr[i].indexOf(elem) == -1 ) {
			// if the "elem" is NOT part of the sub-array, then add the sub-array to the returned array
			newArr.push(arr[i]);
		}
	}

	// Only change code above this line
	return newArr;
}
  
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log("Expect []");

// EOF
