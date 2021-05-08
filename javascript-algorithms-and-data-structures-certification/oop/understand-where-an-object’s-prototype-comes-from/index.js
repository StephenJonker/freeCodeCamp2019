/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 08 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Understand Where an Object’s Prototype Comes From
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Use isPrototypeOf to check the prototype of beagle.

function Dog(name) {
	this.name = name;
}

function Bird(name) {
	this.name = name;
}

let beagle = new Dog("Snoopy");
  
// Only change code below this line

let res1 = Dog.prototype.isPrototypeOf(beagle);
console.log("Object beagle is prototype of dog: " + res1 + " EXPECT true");

let res2 = Bird.prototype.isPrototypeOf(beagle);
console.log("Object beagle is prototype of bird: " + res2 + " EXPECT false");





// EOF
