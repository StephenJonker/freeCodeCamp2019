/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 28 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - debugging  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: debugging 
	- Task: Catch Use of Assignment Operator Instead of Equality Operator
*/

console.log("FCC - Javascript and Algorithms - debugging");

// Goal: 
// <tbd>

// Original code 
//
// let x = 7;
// let y = 9;
// let result = "to come";
//
// if(x = y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }
//
// console.log(result);

// Fixed code 
//
let x = 7;
let y = 9;
let result = "to come";

if(x ==y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
console.log("Expect Not equal! in output line above")

// EOF
