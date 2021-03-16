/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 15 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: <tbd>
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// <tbd>

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

if (result) {
	console.log("Found cat in string using regex");
}

// EOF
