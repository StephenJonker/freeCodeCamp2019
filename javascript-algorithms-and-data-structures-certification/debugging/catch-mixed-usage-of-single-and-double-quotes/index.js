/*
	Javascript file

	Written by: Stephen Jonker
	Written on: Sun 28 Mar 2021
	Copyright (c) 2021 - Stephen Jonker - www.stephenjonker.com
	
	Project: freeCodeCamp - Javascript and Algorithms - debugging  
	
	- This code is based on a template created by me to provide basic script structure
	- Additional template code provided by freeCodeCamp
	- Additions made by me to make it work
	
	Goal: 
	- Section: debugging 
	- Task: Catch Mixed Usage of Single and Double Quotes
*/

console.log("FCC - Javascript and Algorithms - debugging");

// Goal: 
// Fix the string so it either uses different quotes for the href value, 
// or escape the existing ones. Keep the double quote marks around the entire string.

// Original code
//
// let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
// console.log(innerHtml);

// Fixed code 
// 
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);

// EOF
