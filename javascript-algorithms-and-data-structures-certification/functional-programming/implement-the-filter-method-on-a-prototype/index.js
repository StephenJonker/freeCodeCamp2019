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
	- Task: Implement the filter Method on a Prototype
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: Write your own Array.prototype.myFilter(), which should behave exactly 
// like Array.prototype.filter(). You should not use the built-in filter method. 
// The Array instance can be accessed in the myFilter method using this. 
// 



// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];

	for ( let itemKey in this) {
		console.log("SJDEBUG A: " + itemKey);
		if ( callback(this[itemKey]) ) {
			newArray.push(this[itemKey]);
		} 
	}

  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log("Value of new_s array is: " + JSON.stringify(new_s) + " EXPECT: [23,65,5]");

// EOF
