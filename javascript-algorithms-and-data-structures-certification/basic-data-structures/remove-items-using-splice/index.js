/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 31 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic data structures 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic data structures
	- Task: 
*/

console.log("FCC - Javascript and Algorithms - basic data structures");

// Goal: 
// We've initialized an array arr. Use splice() to remove elements from 
// arr, so that it only contains elements that sum to the value of 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
let removed = arr.splice(1,4);
// Only change code above this line
console.log("New arrray is: " + arr);
console.log("Removed is: " + removed);

let sum = 0;
for(let i = 0; i < arr.length; i++) {
	sum = sum + arr[i]; 
}
console.log("sum is: " + sum + " Expect 10"); 

// EOF
