/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 16 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Selecting from Many Options with Switch Statements 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"

function caseInSwitch(val) {
	var answer = "";
	// Only change code below this line
	switch (val) {
		case 1: 
			answer = "alpha";
			break;
		case 2: 
			answer = "beta";
			break;
		case 3: 
			answer = "gamma";
			break;
		case 4: 
			answer = "delta";
			break;
	}  
	// Only change code above this line
	return answer;
  }
  
var res = caseInSwitch(1);
console.log("The value in variable res is: " + res + " ==>> Expect alpha");

res = caseInSwitch(2);
console.log("The value in variable res is: " + res + " ==>> Expect beta");

res = caseInSwitch(3);
console.log("The value in variable res is: " + res + " ==>> Expect gamma");

res = caseInSwitch(4);
console.log("The value in variable res is: " + res + " ==>> Expect delta");


// EOF
