/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 10 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Use Inheritance So You Dont Repeat Yourself
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// The eat method is repeated in both Cat and Bear. 
// Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

function Cat(name) {
	Animal.call(this);
	this.name = name;
}

Cat.prototype = {
	constructor: Cat
};

function Bear(name) {
	this.name = name;
}

Bear.prototype = {
	constructor: Bear
};

function Animal() { }

Animal.prototype = {
	constructor: Animal,
	eat: function() {
		console.log("nom nom nom");
	}
};

// The Animal class has the eat() function
// The Bear and Cat classes do not currently have an eat() function
// 
let theAnimal = new Animal(); 
theAnimal.eat(); 

// EOF
