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
	- Task: Remove Whitespace from Start and End - LAST ONE IN THIS SECTION! The end of RegEx!
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// <tbd>

// ***
//
// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);
//
// ***

let hello = "   Hello, World!  ";
let wsRegex = /^(\s*)(\S+,\s\S+)(\s*)$/i; // Change this line
let result = hello.replace(wsRegex,"$2"); // Change this line

console.log("The value in variable result is: " + result + " Expect <tbd> ");

// EOF
