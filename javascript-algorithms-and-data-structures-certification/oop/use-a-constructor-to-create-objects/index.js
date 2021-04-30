/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 30 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Use a Constructor to Create Objects
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// <tbd>

function Dog() {
	this.name = "Rupert";
	this.color = "brown";
	this.numLegs = 4;
  }
  // Only change code below this line

let hound = new Dog();

console.log("Dogs name is: " + hound.name); 
console.log("Dogs color is: " + hound.color); 
console.log("Dogs number of legs is: " + hound.numLegs); 

// EOF
