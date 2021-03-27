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
	- Task: Check For Mixed Grouping of Characters
*/

console.log("FCC - Javascript and Algorithms - regular expressions");

// Goal: 
// Fix the regex so that it checks for the names of Franklin Roosevelt or 
// Eleanor Roosevelt in a case sensitive manner and it should make 
// concessions for middle names.

// Then fix the code so that the regex that you have created is 
// checked against myString and either true or false is returned 
// depending on whether the regex matches.

let myString = "Eleanor Roosevelt";
// let myString = "Franklin D. Roosevelt";
let myRegex = /(Eleanor|Franklin) (\w\. )*Roosevelt/; // Change this line // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log("The value in variable result is: " + result + " Expect true ");

// EOF
