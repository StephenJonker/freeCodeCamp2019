/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 18 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Return Largest Numbers in Arrays
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
	let result = [];

	let maxValue = Number.MIN_SAFE_INTEGER; 

	for( let arrItemIndex in arr ) {
	
		let subArray = arr[arrItemIndex];
	
		for (let subArrayItemIndex in subArray ) {
			let subArrayItem = subArray[subArrayItemIndex];
			if ( subArrayItem > maxValue ) { 
				maxValue = subArrayItem;
			}
		}

		result.push(maxValue);
		maxValue = Number.MIN_SAFE_INTEGER;
	}

	return result;
}


let res = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log("Large numbers in sub-arrays: " + res);

// EOF
