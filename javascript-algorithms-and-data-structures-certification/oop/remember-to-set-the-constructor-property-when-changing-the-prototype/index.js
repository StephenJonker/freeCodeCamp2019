/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 07 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Remember to Set the Constructor Property when Changing the Prototype
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Define the constructor property on the Dog prototype.

function Dog(name) {
	this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
	constructor: Dog, // Added this line
	numLegs: 4,
	eat: function() {
	  console.log("nom nom nom");
	},
	describe: function() {
	  console.log("My name is " + this.name);
	}
  };

let theDog = new Dog("Rover");

// Show and do, dog things
//
console.log("Dog numLegs is: " + theDog.numLegs);
theDog.eat(); 
theDog.describe(); 

// EOF
