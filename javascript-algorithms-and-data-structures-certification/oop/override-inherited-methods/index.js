/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Thu 13 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Override Inherited Methods
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Override the fly() method for Penguin so that it returns the 
// string "Alas, this is a flightless bird."

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function () { 
	return "Alas, this is a flightless bird."; 
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

console.log("EXPECT: \"Alas, this is a flightless bird.\" ");

// EOF
