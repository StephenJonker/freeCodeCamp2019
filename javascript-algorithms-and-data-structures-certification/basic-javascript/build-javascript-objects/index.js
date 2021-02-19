/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 19 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Build JavaScript Objects 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Make an object that represents a dog called myDog which contains 
// the properties "name" (a string), "legs", "tails" and "friends".
// 
// You can set these object properties to whatever values you want, 
// as long as "name" is a string, "legs" and "tails" are numbers, and 
// "friends" is an array.

var myDog = {
	// Only change code below this line
		name: "BigDog",
		legs: 4,
		tails: 1,
		friends: [ "Sally", "Tina"]
	// Only change code above this line
	}; 

console.log("Full object is: \nmyDog = " + JSON.stringify(myDog, null, 4) );
console.log("\n===\n");
console.log("Value of name is: " + myDog.name);
console.log("Value of legs is: " + myDog.legs);
console.log("Value of tails is: " + myDog.tails);
console.log("Value of friends ARRAY is: " + myDog.friends);


// EOF
