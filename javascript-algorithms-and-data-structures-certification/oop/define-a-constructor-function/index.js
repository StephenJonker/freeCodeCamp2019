/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 29 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Define a Constructor Function
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Create a constructor, Dog, with properties name, color, and numLegs that are set 
// to a string, a string, and a number, respectively.

function Dog() { 
	this.name = "Rover"; 
	this.color = "Green"; 
	this.numLegs = 4;
}

let dogGizmo = new Dog(); 

console.log("Value in Dog.name is: " + dogGizmo.name);
console.log("Value in Dog.color is: " + dogGizmo.color);
console.log("Value in Dog.numLegs is: " + dogGizmo.numLegs);

// EOF
