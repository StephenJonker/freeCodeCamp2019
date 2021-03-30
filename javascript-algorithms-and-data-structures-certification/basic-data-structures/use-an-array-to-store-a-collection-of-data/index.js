/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 29 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - debugging  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: debugging 
	- Task: Use an Array to Store a Collection of Data
*/

console.log("FCC - Javascript and Algorithms - debugging");

// Goal: 
// We have defined a variable called yourArray. Complete the statement by 
// assigning an array of at least 5 elements in length to the yourArray variable. 
// Your array should contain at least one string, one number, and one boolean.

let yourArray = [
	"Bob",
	"Cat", 
	"Dog", 
	45,
	true
]; // Change this line

console.log("the value in your array is: " + yourArray);

// Display the type of each element in the array
// 
for( let i = 0; i < yourArray.length; i++ ) {
	console.log("Array element [" + i + "] is: " + typeof(yourArray[i]) );
}

// EOF
