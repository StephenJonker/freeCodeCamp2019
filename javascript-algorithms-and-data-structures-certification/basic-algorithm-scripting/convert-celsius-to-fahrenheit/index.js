/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 14 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Convert Celsius to Fahrenheit
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// <tbd>

function convertToF(celsius) {
	let fahrenheit;
	fahrenheit = celsius * (9/5) + 32;
	return fahrenheit;
}
  
let res = convertToF(30);
console.log("30 degrees Celsius converted to Fahrenheit is: " + res) + " Expect: 86";

// EOF
