/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 17 May 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Object Oriented Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Object Oriented Programming
	- Task: Use an IIFE to Create a Module
*/

console.log("FCC - Javascript and Algorithms - Object Oriented Programming");

// Goal: 
// Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. 
// funModule should return an object.

let funModule = ( function() {
	return {
		isCuteMixin: function(obj) {
			obj.isCute = function() {
				return true;
			};
		},
		singMixin: function(obj) {
			obj.sing = function() {
				console.log("Singing to an awesome tune");
			};
		}
	}
})();

let gizmo = {};
funModule.isCuteMixin(gizmo);
funModule.singMixin(gizmo);

let res = gizmo.isCute();
console.log("Value in res is: " + res); 

console.log("Value from sign() is: ");
gizmo.sing(); 

// EOF
