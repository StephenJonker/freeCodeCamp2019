/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 5 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Write Concise Declarative Functions with ES6
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Refactor the function setGear inside the object bicycle 
// to use the shorthand syntax described above.

// Only change code below this line
// const bicycle = {
// 	gear: 2,
// 	setGear: function(newGear) {
// 	  this.gear = newGear;
// 	}
// };

const bicycle = {
	gear: 2,
	setGear(newGear) {
		console.log("Debug:");
	  	this.gear = newGear;
	}
};

// Only change code above this line
bicycle.setGear(3);
console.log("Value in bycycle.gear is: " + bicycle.gear);

// let res = "<tbd>"; 
// console.log("The value in variable res is: " + res + " Expect <tbd> ");

// EOF
