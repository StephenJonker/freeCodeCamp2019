/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Fri 16 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Factorialize a Number
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// Return the factorial of the provided integer.
//
// Note: this solution uses recursion 

function factorialize(num) {
	if (num == 0) {
		return 1;
	} else { 
		return num * factorialize( num - 1);
	}
}

let number = 5;
let res = factorialize(number);
console.log("Factorial of " + number + " is: " + res + " Expect 120");

// EOF
