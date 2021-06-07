/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 7 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Combine an Array into a String Using the join Method
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Use the join method (among others) inside the sentensify function to make a 
// sentence from the words in the string str. The function should return a 
// string. For example, I-like-Star-Wars would be converted to I like Star Wars. 
// For this challenge, do not use the replace method.

function sentensify(str) {
	// Only change code below this line

	let newArray = str.split(/[\W\s\d]/);
	console.log("newArray is: " + JSON.stringify(newArray)); 
  
	let res = newArray.join(" ");
	// Only change code above this line

	// Alternate solution on 1 line
	//
	// return str.split(/[\W\s\d]/).join(" ");

	return res;
}
let result = sentensify("May-the-force-be-with-you");

console.log("The value in variable result is: " + JSON.stringify(result) + " Expect \"May the force be with you\" ");

// EOF
