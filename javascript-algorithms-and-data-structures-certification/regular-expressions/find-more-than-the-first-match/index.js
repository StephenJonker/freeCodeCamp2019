/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Wed 17 Mar 2021
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
// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
//
// Note
// You can have multiple flags on your regex like /search/gi
// 

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

if ( result != null ) {
	console.log("Value in result is: " + result);
	console.log("Type of result is: " + typeof(result) );
	console.log("Length of result is: " + result.length );
	console.log("value in result at pos 0 is: " + result[0]);
	console.log("value in result at pos 1 is: " + result[1]);
} else {
	console.log("Regex pattern not found");
}

// EOF
