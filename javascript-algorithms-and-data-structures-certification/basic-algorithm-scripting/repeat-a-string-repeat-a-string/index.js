/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 20 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Repeat a String Repeat a String
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// <tbd>

function repeatStringNumTimes(str, num) {
	let result = "";
	
	if ( num > 0 ) {
		for (let i = 0; i < num; i++ ) {
			result += str;
		}
	}

	return result;
}
  
let res = repeatStringNumTimes("abc", 3);
console.log("Repeated string is: " + res);


// EOF
