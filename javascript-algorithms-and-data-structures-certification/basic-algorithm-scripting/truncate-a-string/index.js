/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Tue 20 Apr 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - basic algorithm scripting 
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp - (www.freecodecamp.com)
	- Additions made by me to make it work
	
	Goal: 
	- Section: basic-algorithm-scripting
	- Task: Truncate a String
*/

console.log("FCC - Javascript and Algorithms - basic algorithm scripting");

// Goal: 
// <tbd>

function truncateString(str, num) {
	let result = ""

	if ( str.length > num ) {
		result = str.substring(0,num) + "...";
	} else {
	  result = str; 
  	}
	
	return result;
}
  
let res = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log("1: The value in variable res is: " + res);

res = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
console.log("2: The value in variable res is: " + res);

// EOF
