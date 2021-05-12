/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 12 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: <tbd>
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype 
// constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can 
// both eat() and bark(). The bark() method should print Woof! to the console.

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
	console.log("Woof!");
}

// Only change code above this line

let beagle = new Dog();

console.log("Beagle is eating...");
beagle.eat();

console.log("Beagle is barking...");
beagle.bark(); 


// EOF
