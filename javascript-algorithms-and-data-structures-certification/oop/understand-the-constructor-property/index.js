/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 05 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Understand the Constructor Property
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Write a joinDogFraternity function that takes a candidate parameter and, using the 
// constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
	this.name = name;
}

// Only change code below this line

function joinDogFraternity(candidate) {
	if ( candidate.constructor === Dog ) { 
		return true; 
	} else { 
		return false; 
	}
}

let rover = new Dog("BigDog"); 
let result = joinDogFraternity(rover); 
console.log("the Dog object named rover is of type Dog: " + result); 
console.log("name of rover dog is: " + rover.name);

// EOF
