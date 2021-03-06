/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 6 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - es6  
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: es6
	- Task: Use class Syntax to Define a Constructor Function
*/

console.log("FCC - Javascript and Algorithms - es6");

// Goal: 
// Use the class keyword and write a constructor to create the Vegetable class.
// The Vegetable class allows you to create a vegetable object with a property 
// name that gets passed to the constructor.

// Only change code below this line

class Vegetable {
	constructor (type) {
		this.name = type;
	}	
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log("Value is carrot.name is: " + carrot.name + " Expect carrot"); // Should display 'carrot'

// EOF
