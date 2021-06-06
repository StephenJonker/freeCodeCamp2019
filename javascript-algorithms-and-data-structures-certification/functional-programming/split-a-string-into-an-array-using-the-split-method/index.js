/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 6 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Split a String into an Array Using the split Method
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Use the split method inside the splitify function to split str into an 
// array of words. The function should return the array. Note that the words 
// are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
	// Only change code below this line
  
	let result = str.split(/[\W\s\d]/);
	return result; 
  
	// Only change code above this line
}
let result = splitify("Hello World,I-am code");
 
console.log("The value in variable result is: " + JSON.stringify(result) + ' Expect ["Hello","World","I","am","code"] ');

// EOF
