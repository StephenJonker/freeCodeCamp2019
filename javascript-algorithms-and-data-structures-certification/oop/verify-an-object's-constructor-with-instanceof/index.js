/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 02 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Verify an Object's Constructor with instanceof
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Create a new instance of the House constructor, calling it myHouse and passing a 
// number of bedrooms. Then, use instanceof to verify that it is an instance of House.

function House(numBedrooms) {
	this.numBedrooms = numBedrooms;
}
  
// Only change code below this line
let myHouse = new House(4); 

let isHouseObject = myHouse instanceof String;

if ( isHouseObject ) { 
	console.log("YES, it is an instance of a House object"); 
} else { 
	console.log("NO. it is NOT an instance of a House object");
}

// EOF
