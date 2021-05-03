/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 03 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Understand Own Properties
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// <tbd>

function Bird(name) {
	this.name = name;
	this.numLegs = 2;
}
  
let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for( let props in canary ) { 
	if ( canary.hasOwnProperty(props)) {
		ownProps.push(props);	
	}
}

console.log("Value in ownProps is: " + JSON.stringify(ownProps));

// EOF
