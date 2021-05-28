/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 28 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Implement map on a Prototype
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// <tbd>

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for(let index = 0; index <= this.length - 1; index++) {
    newArray.push(callback(this[index]));
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log("Result is: " + JSON.stringify(new_s) + " EXPECT: [46,130,196,10]");

// EOF
