/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 25 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: chunky monkey
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Write a function that splits an array (first argument) into groups the 
// length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
	let result = [];
	let len = arr.length; // arr is changing during the loops, save original length

	for (let loop = 0; loop < len / size; loop++) {

		let chunk = [];
		for (let index = 0; index < size; index++ ) {
			let item = arr.shift();
			if ( item != null ) {
				chunk.push(item);
			}
		}
		result.push(chunk);
	}
	return result;
}
  
let res = chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 4);
console.log("The value in variable result is: " + JSON.stringify(res) + " Expect [[\"a\",\"b\",\"c\",\"d\"],[\"e\",\"f\"]] ");


// EOF
