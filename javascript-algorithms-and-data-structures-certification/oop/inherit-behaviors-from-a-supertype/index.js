/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 11 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Inherit Behaviors from a Supertype
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Use Object.create to make two instances of Animal named duck and beagle.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

console.log("Duck eating sounds like: ");
duck.eat();
console.log("Beagle eating sounds like: ");
beagle.eat();

// EOF
