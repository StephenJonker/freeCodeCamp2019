/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 17 Feb 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic javascript   
	
	- This code is based on a template created by me to provide basic HTML structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic javascript 
	- Task: Adding a Default Option in Switch Statements 
*/

console.log("FCC - Javascript and Algorithms - basic javascript");

// Goal: 
// Write a switch statement to set answer for the following conditions:
// "a" - "apple"
// "b" - "bird"
// "c" - "cat"
// default - "stuff"

function switchOfStuff(val) {
	var answer = "";
	// Only change code below this line
  
	switch (val) {
		case "a": 
			answer = "apple";
			break;
		case "b": 
			answer = "bird";
			break;
		case "c": 
			answer = "cat";
			break;
		default: 
			answer = "stuff"; 
			break; 
	} 
	// Only change code above this line
	return answer;
  }
  
var res = switchOfStuff("a");
console.log("The value in variable res is: " + res);

res = switchOfStuff("b");
console.log("The value in variable res is: " + res);

res = switchOfStuff("c");
console.log("The value in variable res is: " + res);

res = switchOfStuff("foobar");
console.log("The value in variable res is: " + res);

// EOF
