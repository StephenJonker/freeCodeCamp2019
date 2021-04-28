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
	- Task: Make Code More Reusable with the "this" Keyword
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.

let dogX = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
  
let res = dogX.sayLegs();

console.log("The value in variable res is: " + res + " Expect This dog has 4 legs. ");

// EOF
