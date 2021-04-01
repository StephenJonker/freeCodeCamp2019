/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 1 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Add Items Using splice
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We have defined a function, htmlColorNames, which takes an array of 
// HTML colors as an argument. Modify the function using splice() to remove 
// the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' 
// in their respective places.

function htmlColorNames(arr) {
	// Only change code below this line
	let startIndex = 0;
	let amountToDelete = 2;
	arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
	// Only change code above this line
	return arr;
}
  
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

console.log("Expect: DarkSalmon, BlanchedAlmond, LavenderBlush, PaleTurquoise, FireBrick");

// EOF
