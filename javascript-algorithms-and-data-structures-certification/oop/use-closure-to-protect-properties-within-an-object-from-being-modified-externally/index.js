/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 15 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Use Closure to Protect Properties Within an Object from Being Modified Externally
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Change how weight is declared in the Bird function so it is a private 
// variable. Then, create a method getWeight that returns the value of weight 15.

function Bird() {
	let weight = 15;
  
	this.getWeight = function() {
	  return weight;
	}; 
}

let theBird = new Bird(); 

// Access to theBird object weight via the getter function
// expect this to work
// 
let res = theBird.getWeight(); 
console.log("The birds weight (via getter function) is: " + res); 

// Direct access to theBird object weight variable, expect it to fail
// 
let res2 = theBird.weight; 
console.log("The value in bird.weight is: " + res2);

// EOF
