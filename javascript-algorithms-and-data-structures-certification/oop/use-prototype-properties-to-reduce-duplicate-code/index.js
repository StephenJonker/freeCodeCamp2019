/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 26 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Use Prototype Properties to Reduce Duplicate Code
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Add a numLegs property to the prototype of Dog

function Dog(name) {
	this.name = name;
}

Dog.prototype.numLegs = 4;
  
// Only change code above this line
let beagle = new Dog("Snoopy");

console.log("Beagle.name is: " + beagle.name); 
console.log("Beagle.numLegs is: " + beagle.numLegs);


// EOF
