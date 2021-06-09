/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 8 Jun 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - Functional Programming
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: Functional Programming
	- Task: Apply Functional Programming to Convert Strings to URL Slugs
*/

console.log("FCC - Javascript and Algorithms - Functional Programming");

// Goal: 
// Fill in the urlSlug function so it converts a string title and returns the 
// hyphenated version for the URL. You can use any of the methods covered in this 
// section, and don't use replace. Here are the requirements:
// 
// - The input is a string with spaces and title-cased words
// - The output is a string with the spaces between words replaced by a hyphen (-)
// - The output should be all lower-cased letters
// - The output should not have any spaces

// Only change code below this line
function urlSlug(title) {
	let part1 = title.split(" ");
	let part2 = part1.filter( item => item.length > 0 );
	let part3 = part2.map( item => item.toLowerCase());
	let res = part3.join("-");
	return res;
}
// Only change code above this line
let result = urlSlug(" Winter Is  Coming");

console.log("The value in variable result is: " + result + " Expect <tbd> ");

// EOF
