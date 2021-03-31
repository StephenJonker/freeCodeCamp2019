/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 29 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: Access an Arrays Contents Using Bracket Notation
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// <tbd>

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "foobar";
// Only change code above this line
console.log(myArray);

for(let i = 0; i < myArray.length; i++) {
	console.log("Contents of myArray[" + i + "] is: " + myArray[i]);
}

// EOF
