/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 14 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Intermediate Algorithm Scripting
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Intermediate Algorithm Scripting
	- Task: Diff Two Arrays
*/

console.log("FCC - Javascript and Algorithms - Intermediate Algorithm Scripting");

// Goal: 
// Compare two arrays and return a new array with any items only found in one of the 
// two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// 
// Note: You can return the array with its elements in any order.

// Assume the arrays are sorted 
// 

function diffArray(arr1, arr2) {
	var newArr = [];

	let arrayIndex1 = 0; 
	let arrayIndex2 = 0; 
	let allDone = false; 
	let count = 0; 

	// Ensure arrays are sorted 
	// 
	arr1.sort();
	arr2.sort(); 

	while ( true ) {

		if ( arrayIndex1 == arr1.length ) {
			// add the remainder of the other array to result and return 
			newArr = newArr.concat(arr2.slice(arrayIndex2));
			return newArr;
		}

		if (arrayIndex2 == arr2.length ) {
			newArr = newArr.concat(arr1.slice(arrayIndex1)); 
			return newArr;
		}

		// elements are the same, inc and loop to next comparison 
		// 
		if ( arr1[arrayIndex1] == arr2[arrayIndex2] ) {
			// just inc both indexes 
			arrayIndex1++;
			arrayIndex2++;
			continue;
		}
		
		// Elements are different
		if ( arr1[arrayIndex1] < arr2[arrayIndex2] ) { 
			newArr.push(arr1[arrayIndex1]);
			arrayIndex1++;
		} else { 
			newArr.push(arr2[arrayIndex2]);
			arrayIndex2++;
		}
	}

	return newArr;
}
  
let result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log("The value in variable result is: " + JSON.stringify(result) + " Expect [4] ");

// EOF
