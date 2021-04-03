/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 3 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Copy an Array with the Spread Operator
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We have defined a function, copyMachine which takes arr (an array) and 
// num (a number) as arguments. The function is supposed to return a new array 
// made up of num copies of arr. We have done most of the work for you, but it 
// doesn't work quite right yet. Modify the function using spread syntax so that 
// it works correctly (hint: another method we have already covered might come in 
// handy here!).

function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
		// Only change code below this line
		console.log("arr is " + [...arr]);
		newArr.splice(1,0,[...arr]);
		console.log("newArr is: " + newArr);
		// Only change code above this line
		num--;
	}
	return newArr;
}
console.log(copyMachine([true, false, true], 2));


// EOF
