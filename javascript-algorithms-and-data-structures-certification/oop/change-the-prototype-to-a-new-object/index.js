/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 06 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Change the Prototype to a New Object
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Add the property numLegs and the two methods eat() and describe() to the 
// prototype of Dog by setting the prototype to a new object.

function Dog(name) {
	this.name = name;
}
  
Dog.prototype = {
	// Only change code below this line

	numLegs: 2,
	eat: function() {
		console.log("nom nom nom");
	},
	describe: function() { 
		console.log("My name is " + this.name);
	}
};

let theDog = new Dog("Rover");

console.log("Dogs name is: " + theDog.name);
console.log("Dogs numLegs is: " + theDog.numLegs);

theDog.eat();
theDog.describe();

// display "theDog" properties
console.log(" ");
for (let property in theDog) {
	console.log("Properties of >theDog< are: " + property);
	console.log("theDog hasOwnProperty: " + theDog.hasOwnProperty(property) );
	console.log("");
}

// EOF
