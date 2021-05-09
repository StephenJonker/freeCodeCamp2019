/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 09 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Understand the Prototype Chain
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// <tbd>

function Dog(name) {
	this.name = name;
}
  
let beagle = new Dog("Snoopy");
  
Dog.prototype.isPrototypeOf(beagle);  // yields true
  
// Fix the code below so that it evaluates to true
// ???.isPrototypeOf(Dog.prototype);
let res = Object.prototype.isPrototypeOf(beagle);

console.log("Value in res is: " + res + " EXPECT true");


// EOF
