/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 24 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Where do I Belong
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Return the lowest index at which a value (second argument) should be inserted into an 
// array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
	let result = 0;

	let sortedArray = arr.sort(function(a,b) { return a - b }); // sort will change the array "arr";
	
	let index = 0;
	do {

		let currentItem = sortedArray[ index ];	
		let nextItem = sortedArray[ index + 1 ];

		if ( num <= sortedArray[0] ) { 
			result = 0;
			break;
		}

		if ( num >= sortedArray[sortedArray.length - 1] ) {
			result = sortedArray.length;
			break;
		}
		
		if ( currentItem < nextItem ) { 
			if ( num > currentItem ) { 
				result = index + 1;
			}
		}
		index++;
	
	} while ( index < sortedArray.length - 1 );
	
	return result;
}


let theArray = [40, 25, 60, 30, 42, 80, 100];

let res = getIndexToIns(theArray, 50);
console.log("The value in variable res is: " + JSON.stringify(res) + " Expect 4 ");

// Ya, could use a testing library for this next bit
if ( res == 4 ) { 
	console.log("PASS");
} else { 
	console.log("FAIL");
}

// EOF
