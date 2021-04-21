/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 21 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Finders Keepers
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Create a function that looks through an array arr and returns the first element 
// in it that passes a 'truth test'. This means that given an element x, the 'truth test' 
// is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
	let num = undefined;
	let arrItem = 0;
	let r = 0;

	for( let arrIndex in arr ) {

		arrItem = arr[arrIndex];
		r = func(arrItem);
		if ( r ) {
			num = arrItem;
			break;
		}
	}

	return num;
}
  
let res = findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);

console.log("The value in variable res is: " + res + " Expect 8 ");

// EOF
