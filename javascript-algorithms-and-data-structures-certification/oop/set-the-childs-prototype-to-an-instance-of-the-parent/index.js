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
	- Task: Set the Childs Prototype to an Instance of the Parent
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Modify the code so that instances of Dog inherit from Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

beagle.eat(); 
console.log("Called beagle.eat(), EXPECT nom nom nom");

// EOF
