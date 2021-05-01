/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 1 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Extend Constructors to Receive Arguments
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Create another Dog constructor. This time, set it up to take the parameters name 
// and color, and have the property numLegs fixed at 4. Then create a new Dog saved 
// in a variable terrier. Pass it two strings as arguments for the name and color properties.

function Dog(name, color) {
	this.name = name;
	this.color = color;
	this.numLegs = 4;
}

let terrier = new Dog("Rover", "Green");

console.log("Values in object terrier.name are: " + terrier.name);
console.log("Values in object terrier.color are: " + terrier.color);
console.log("Values in object terrier.numLegs are: " + terrier.numLegs);

// EOF
