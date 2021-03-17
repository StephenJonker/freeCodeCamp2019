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
	- Task: Match Anything with Wildcard Period
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Complete the regex unRegex so that it matches the strings 
// run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

if ( result ) {
	console.log("Value in result is: " + result);
}

// EOF
