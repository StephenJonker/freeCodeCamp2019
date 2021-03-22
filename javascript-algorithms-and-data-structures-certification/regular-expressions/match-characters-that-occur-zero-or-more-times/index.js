/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Mon 22 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Match Characters that Occur Zero or More Times
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// For this challenge, chewieQuote has been initialized as the 
// string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex 
// that uses the * character to match an uppercase A character immediately followed 
// by zero or more lowercase a characters in chewieQuote. Your regex does not 
// need flags or character classes, and it should not match any of the other quotes.

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

console.log("The value in variable res is: " + result + " Expect Aaaaaaaaaaaaaaaa ");
console.log("Length of match string is: " + result.length);
console.log("Type of result is: " + typeof(result) );
console.log("first element of result is: " + result[0] );

// EOF
