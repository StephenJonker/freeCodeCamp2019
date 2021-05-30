/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 30 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Return Part of an Array Using the slice Method
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// <tbd>

function sliceArray(anim, beginSlice, endSlice) {
	// Only change code below this line
  
	return anim.slice(beginSlice,endSlice);
  
	// Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
let res = sliceArray(inputAnim, 1, 3);

console.log("Value in res is: " + JSON.stringify(res) + " EXPECT: [\"Dog\",\"Tiger\"]");

// EOF
