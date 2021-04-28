/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 28 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Create a Method on an Object
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Using the dog object, give it a method called sayLegs. The method should 
// return the sentence This dog has 4 legs.

// Note: originally used the "this" keyword to reference the "numLegs" property
// went back to referencing the named object "dog", as the "this" keyword comes in the next 
// exammple :-) 

let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function() { return "This dog has " + dog.numLegs + " legs" }
};
  
let res = dog.sayLegs();

console.log("The value in variable res is: " + res + " EXPECT: This dog has 4 legs ");

// EOF
