/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 4 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Iterate Over All Properties
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Add all of the own properties of beagle to the array ownProps. Add all of the 
// prototype properties of Dog to the array prototypeProps.

function Dog(name) {
	this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = []

// Only change code below this line

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log("ownProps is: " + ownProps);
console.log("prototypeProps is: " + prototypeProps);

// EOF
