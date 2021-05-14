/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 14 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Use a Mixin to Add Common Behavior Between Unrelated Objects
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Create a mixin named glideMixin that defines a method named glide. Then use the 
// glideMixin to give both bird and boat the ability to glide.

let bird = {
	name: "Donald",
	numLegs: 2
};
  
let boat = {
	name: "Warrior",
	type: "race-boat"
};
  
// Only change code below this line

let glideMixIn = function(obj) {
	obj.glide = function() {
		console.log("Gliding, wooosh!");
	}
}

glideMixIn(boat);
glideMixIn(bird); 

boat.glide();
bird.glide(); 


// EOF
