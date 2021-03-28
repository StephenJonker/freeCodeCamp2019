/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 28 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - debugging  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: debugging 
	- Task: Catch Off By One Errors When Using Indexing
*/

console.log("FCC - Javascript and Algorithms - debugging");

// Goal: 
// Fix the two indexing errors in the following function 
// so all the numbers 1 through 5 are printed to the console.

// Original code 
//
// function countToFive() {
// 	let firstFive = "12345";
// 	let len = firstFive.length;
// 	// Only change code below this line
// 	for (let i = 1; i <= len; i++) {
// 	// Only change code above this line
// 	  console.log(firstFive[i]);
// 	}
//   }
//
//   countToFive();

// Fixed code 
//
function countToFive() {
	let firstFive = "12345";
	let len = firstFive.length;
	// Only change code below this line
	for (let i = 0; i < len; i++) {
	// Only change code above this line
	  console.log(firstFive[i]);
	}
}
  
countToFive();

console.log("Expect number 1 to 5 to be displayed one per line starting with 1");

// EOF
