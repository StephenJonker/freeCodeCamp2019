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
	- Task: Mutations
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Return true if the string in the first element of the array contains all of 
// the letters of the string in the second element of the array.

// If all the letters in the 2nd parameter are in the 1st parameter, then return true
// else return false 
// 
// GIVEN:
// - a is the set of all chars in the 1st parameter 
// - b is the set of all chars in the 2nd parameter
// THEN:
// if b is a sub-set of a, return true 

function mutation(arr) {
	let result = undefined;

	let firstElement = arr[0].toLowerCase();
	let secondElement = arr[1].toLowerCase(); 

	let isSubSet = true;
	for ( let index = 0; index < secondElement.length; index++ ) {

		let char = secondElement.charAt(index);

		let r = firstElement.indexOf(char); 
		if ( r == -1 ) { isSubSet = false; }
	}
	result = isSubSet;

	return result;
}

let res = undefined;

res = mutation(["ABC", "A"]);
console.log("The value in variable res is: " + res + " Expect true ");
( res == true ) ? console.log("PASS") : console.log("FAIL");

res = mutation(["Mary", "Army"]);
console.log("The value in variable res is: " + res + " Expect true ");
( res == true ) ? console.log("PASS") : console.log("FAIL");

res = mutation(["hello", "hey"]);
console.log("The value in variable res is: " + res + " Expect false ");
( res == false ) ? console.log("PASS") : console.log("FAIL"); 

res = mutation(["hello", "hello"]);
console.log("The value in variable res is: " + res + " Expect true ");
( res == true ) ? console.log("PASS") : console.log("FAIL");

res = mutation(["Alien", "line"]);
console.log("The value in variable res is: " + res + " Expect true ");
( res == true ) ? console.log("PASS") : console.log("FAIL");


// EOF
