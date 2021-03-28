/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sat 27 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - regular expressions  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: regular expressions
	- Task: Use Capture Groups to Search and Replace
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Write a regex fixRegex using three capture groups that will search for 
// each word in the string one two three. Then update the replaceText variable 
// to replace one two three with the string three two one and assign the result 
// to the result variable. Make sure you are utilizing capture groups in the 
// replacement string using the dollar sign ($) syntax.

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log("The value in variable result is: " + result + " Expect three two one");

// EOF
